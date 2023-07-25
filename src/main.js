import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueGtag from 'vue-gtag'
import { inject } from '@vercel/analytics'
import reportWebVitals from './reportWebVitals'
import { sendToAnalytics } from './vitals'

inject()

reportWebVitals(sendToAnalytics)

createApp(App)
    .use(VueGtag, {
        config: { id: import.meta.env.VITE_GA_MEASUREMENT_ID }
    })
    .mount('#app')
