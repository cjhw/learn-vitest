/// <reference types="vitest"/>

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vitestConfig } from './vitestConfig'

// 可以不拆一个config文件直接在vite.config.ts里配置就好，可以直接使用vite的插件，比如@vitejs/plugin-vue

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    ...vitestConfig,
  },
  plugins: [vue()],
})
