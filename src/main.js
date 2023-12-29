import App from './App.vue'
import './style.css'
import { inject } from '@vercel/analytics'
import { createApp } from 'vue'

inject()

createApp(App).mount('#app')
