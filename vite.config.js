import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@core': path.resolve(__dirname, './src/core'),
      '@context': path.resolve(__dirname, './src/context')
    }
  },
  plugins: [react()],
})
