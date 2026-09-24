<template>
  <main>
    <NavBar />
    <div class="container">
      <div>
        <h1 class="text-center mb-4 mt-5 text-light">Contact</h1>
        <p class="text-center">
          Let's Work Together!
          Have a project in mind or looking for a passionate developer to join your team or company ? 
        </p>
        <p class="text-center">
          Send me a message below and I'll get back to you as soon as possible.
        </p>
      </div>
      <section class="contact-section">
        <div class="container-fluid">
          <div class="row g-4">

            <!-- LEFT SIDE -->
            <div class="col-lg-5">
              <div class="contact-card">

                <h1 class="title">Contact Info</h1>

                <p class="desc">
                  Feel free to reach out to me directly through any of the details below. I'm always open to discussing new projects or ideas.
                </p>

                <!-- LOCATION -->
                <div class="info-item">
                  <div class="icon">
                    <i class="bi bi-geo-alt"></i>
                  </div>

                  <div>
                    <h3>Our Location</h3>
                    <p>608 Street</p>
                    <p>Khan Toulkok, Sangkat Berngkok ll, Phnom penh</p>
                  </div>
                </div>

                <!-- PHONE -->
                <div class="info-item">
                  <div class="icon">
                    <i class="bi bi-telephone"></i>
                  </div>

                  <div>
                    <h3>Phone Number</h3>
                    <p>+855 96 630 5719</p>
                    <p>Not Null</p>
                  </div>
                </div>

                <!-- EMAIL -->
                <div class="info-item">
                  <div class="icon">
                    <i class="bi bi-envelope"></i>
                  </div>

                  <div>
                    <h3>Email Address</h3>
                    <p class="pEmail">noeunkarona354@gmail.com</p>
                    <p>Not Null</p>
                  </div>
                </div>

              </div>
            </div>

            <!-- RIGHT SIDE -->
            <div class="col-lg-7">
              <div class="contact-card">

                <h1 class="title">Get In Touch</h1>

                <p class="desc">
                  Have a project in mind, a job opportunity, or just want to say hi? Fill out the form below and I'll respond as soon as possible!
                </p>

                <form @submit.prevent="sendToTelegram">
                  <div class="row g-4">

                    <div class="col-md-6">
                      <input 
                        v-model="form.name" 
                        type="text" 
                        class="form-control custom-input" 
                        placeholder="Your Name" 
                        required 
                      />
                    </div>

                    <div class="col-md-6">
                      <input 
                        v-model="form.email" 
                        type="email" 
                        class="form-control custom-input" 
                        placeholder="Your Email" 
                        required 
                      />
                    </div>

                    <div class="col-12">
                      <input 
                        v-model="form.subject" 
                        type="text" 
                        class="form-control custom-input" 
                        placeholder="Subject" 
                        required 
                      />
                    </div>

                    <div class="col-12">
                      <textarea 
                        v-model="form.message" 
                        rows="8" 
                        class="form-control custom-input" 
                        placeholder="Message" 
                        required
                      ></textarea>
                    </div>

                    <div class="col-12 text-center">
                      <button type="submit" class="send-btn" :disabled="loading">
                        {{ loading ? 'Sending...' : 'Send Message' }}
                      </button>
                    </div>

                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  </main>
  <FooterView />
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import FooterView from '@/components/component/FooterView.vue';
import NavBar from '@/components/component/NavBar.vue';

// 1. Reactive Variable សម្រាប់ Form
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const loading = ref(false);

// 2. Function សម្រាប់ផ្ញើសារទៅកាន់ Express Backend
const sendToTelegram = async () => {
  loading.value = true;

  try {
    const response = await axios.post('http://localhost:5000/api/send-message', {
      name: form.value.name,
      email: form.value.email,
      subject: form.value.subject,
      message: form.value.message
    });

    if (response.data.success) {
      alert('សាររបស់អ្នកត្រូវបានផ្ញើទៅកាន់ Telegram រួចរាល់!');
      form.value = { name: '', email: '', subject: '', message: '' };
    }
  } catch (error) {
    console.error('Error sending message:', error);
    alert('មានបញ្ហាក្នុងការផ្ញើសារ! សូមពិនិត្យមើលថាតើ Express Server (Node.js) កំពុងរត់ហើយឬនៅ។');
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.contact-section {
  background: #07131d;
  min-height: 90vh;
  padding: 40px 20px;
  font-family: sans-serif;
  position: relative;
  z-index: 1;
}

.contact-card {
  background: #0b1823;
  border-radius: 24px;
  padding: 50px;
  min-height: 100%;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
}

.title {
  color: white;
  font-size: 45px;
  font-weight: 200;
  margin-bottom: 20px;
}

.desc {
  color: #b8b8b8;
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 60px;
  max-width: 700px;
}

/* INFO */
.info-item {
  display: flex;
  gap: 30px;
  margin-bottom: 70px;
}

.icon {
  color: white;
  font-size: 30px;
  min-width: 40px;
}

.info-item h3 {
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
}

.info-item p {
  color: #b8b8b8;
  font-size: 18px;
  margin-bottom: 6px;
}

/* FORM - កែប្រែដើម្បីឱ្យទាញស្រទាប់ចុចមកលើគេបំផុត */
.custom-input {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.08);
  height: 70px;
  color: white;
  border-radius: 14px;
  padding: 20px;
  font-size: 20px;
  position: relative !important;
  z-index: 999 !important;
  pointer-events: auto !important;
}

.custom-input:focus {
  background: transparent;
  color: white;
  box-shadow: none;
  border-color: #1f8fff;
}

textarea.custom-input {
  height: auto;
  resize: none;
}

.custom-input::placeholder {
  color: #8b8b8b;
}

.send-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 26px;
  margin-top: 20px;
  transition: 0.3s;
  cursor: pointer;
  position: relative !important;
  z-index: 999 !important;
  pointer-events: auto !important;
}

.send-btn:hover {
  color: #1f8fff;
}

.send-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Fix អក្សរ Email ហូរលើ Screen តូច */
.pEmail {
  font-size: 18px !important;
  word-break: break-word;
  overflow-wrap: anywhere;
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .contact-card {
    padding: 30px;
  }

  .title {
    font-size: 40px;
  }

  .desc {
    font-size: 16px;
  }

  .info-item {
    gap: 20px;
    margin-bottom: 50px;
  }

  .info-item h3 {
    font-size: 22px;
  }

  .custom-input {
    height: 60px;
    font-size: 17px;
  }
}

@media (max-width: 576px) {
  .pEmail {
    font-size: 14px !important;
  }
}
</style>