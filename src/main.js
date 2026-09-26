import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/style.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1000,
  once: true,
  offset: 100
})

const app = createApp(App)

app.config.performance = false
app.use(router)

app.mount('#app')