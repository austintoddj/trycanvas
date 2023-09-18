import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [vue()],
    define: {
        'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(
            process.env.VERCEL_ANALYTICS_ID
        )
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})
