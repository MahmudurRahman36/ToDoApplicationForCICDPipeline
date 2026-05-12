import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vitest configuration embedded in vite.config.js
  test: {
    globals: true,
    environment: 'node',
  },
})
