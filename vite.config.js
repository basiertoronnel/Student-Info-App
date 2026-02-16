import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Relative base so assets load correctly on GitHub Pages and when opening dist locally
  base: './'
})
