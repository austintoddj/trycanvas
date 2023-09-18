import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { inject } from '@vercel/analytics'
import reportWebVitals from './reportWebVitals'
import { sendToVercelAnalytics } from './vitals'

inject()

reportWebVitals(sendToVercelAnalytics)

createApp(App).mount('#app')
