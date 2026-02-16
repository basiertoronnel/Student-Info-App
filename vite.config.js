import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Required for GitHub Pages project site: https://username.github.io/Student-Info-App/
  base: '/Student-Info-App/'
})
