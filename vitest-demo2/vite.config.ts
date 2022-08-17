/// <reference types="vitest"/>
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
    transformMode: {
      web: [/.tsx$/],
    },
  },
  plugins: [vueJsx(), vue()],
})
