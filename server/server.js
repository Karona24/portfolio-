import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// កំណត់ទីតាំង Folder (Directory) សម្រាប់ ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ប្រាប់អោយ dotenv ទាញយកឯកសារ .env ឱ្យចំទីតាំង Folder server
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoint សម្រាប់ទទួលសារពី Vue.js
app.post('/api/send-message', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // ១. ផ្ទៀងផ្ទាត់ទិន្នន័យ (Validation)
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'សូមបំពេញព័ត៌មានឱ្យបានគ្រប់ជ្រុងជ្រោយ!' 
    });
  }

  // ២. ផ្ទៀងផ្ទាត់ Environment Variables
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return res.status(500).json({ 
      success: false, 
      message: 'Server Configuration Error: .env Variables Missing' 
    });
  }

  // ៣. រៀបចំទម្រង់សារ
  const textMessage = `📩 សារថ្មីពី Web Contact!\n\n👤 ឈ្មោះ: ${name}\n📧 អ៊ីមែល: ${email}\n📌 ប្រធានបទ: ${subject}\n💬 សារ:\n${message}`;

  try {
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    // ៤. ផ្ញើទៅ Telegram API
    await axios.post(telegramUrl, {
      chat_id: chatId,
      text: textMessage
    });
    return res.status(200).json({ 
      success: true, 
      message: 'ផ្ញើសារបានជោគជ័យ!' 
    });

  } catch (error) {
    
    return res.status(500).json({ 
      success: false, 
      message: 'មានបញ្ហាក្នុងការផ្ញើសារទៅ Telegram!',
      error: error.response?.data || error.message
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('server is running on port 5000');
});