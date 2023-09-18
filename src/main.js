import './style.css'

import { inject } from '@vercel/analytics'
import { createApp } from 'vue'

import App from './App.vue'
import reportWebVitals from './reportWebVitals'
import { sendToVercelAnalytics } from './vitals'

inject()

reportWebVitals(sendToVercelAnalytics)

createApp(App).mount('#app')
