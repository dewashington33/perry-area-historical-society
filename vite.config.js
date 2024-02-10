import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
  plugins: [react()],
  base: mode === 'production' ? '/perry-area-historical-society/' : '/'
})