import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initSecurity } from './utils/security'

// Initialize Anti-Debugging
initSecurity()

createApp(App).use(router).mount('#app')
