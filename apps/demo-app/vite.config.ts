import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'magic2u-design-system': path.resolve(__dirname, '../../packages/ui')
    }
  }
})
