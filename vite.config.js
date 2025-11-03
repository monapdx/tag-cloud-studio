// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],          // 👈 must be an array
  // base: '/tag-cloud-studio/', // uncomment if deploying to GH Pages
})
