import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueGtag from 'vue-gtag'
import { inject } from '@vercel/analytics'

inject()

createApp(App)
    .use(VueGtag, {
        config: { id: 'G-3PS6P0GB6J' }
    })
    .mount('#app')
