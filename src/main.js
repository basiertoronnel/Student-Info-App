import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'

const app = createApp(App)
app.use(router)

const el = document.getElementById('app')
if (!el) {
  document.body.innerHTML = '<p style="padding:2rem;font-family:sans-serif;">App root element not found.</p>'
} else {
  app.mount('#app')
}
