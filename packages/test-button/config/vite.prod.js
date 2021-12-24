/*
 * @Author: saber
 * @Date: 2021-12-24 16:42:28
 * @LastEditTime: 2021-12-24 17:14:27
 * @LastEditors: saber
 * @Description: 
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, '../src/index.ts'),
      formats: ['es', 'cjs'],
    }
  }
});