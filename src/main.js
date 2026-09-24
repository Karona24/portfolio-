import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style.css'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

// បិទ Vue Devtools ក្នុង Production
app.config.performance = false;
app.use(router)

// Initialize AOS
AOS.init({
  duration: 1000, 
  once: true,    
  offset: 100,   
})

app.mount('#app')