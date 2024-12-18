import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@nextui-org/react"],
  },
  resolve: {
    alias: {
      '@': '/src', 
    },
  },
})