import App from './App.vue'
import reportWebVitals from './reportWebVitals'
import './style.css'
import { sendToVercelAnalytics } from './vitals'
import { inject } from '@vercel/analytics'
import { createApp } from 'vue'

inject()

reportWebVitals(sendToVercelAnalytics)

createApp(App).mount('#app')
