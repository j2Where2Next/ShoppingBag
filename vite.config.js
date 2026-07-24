import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 1. Add the server configuration block
  server: {
    proxy: {
      // 2. Intercept any local network call starting with "/api"
      '/api': {
        target: 'https://dummyjson.com', // <-- Insert your target here
        changeOrigin: true,
        // 3. Strip out the word "/api" before forwarding to the web
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})