import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default ({ command }) => defineConfig({
  plugins: [react()],
  base: command === 'serve' ? '/' : '/perry-area-historical-society/'
})