/*
 * @Author: saber
 * @Date: 2021-12-24 17:07:57
 * @LastEditTime: 2021-12-24 17:36:46
 * @LastEditors: saber
 * @Description: 
 */
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      name: 'index',
    },
    rollupOptions: {
      input: [resolve(__dirname, 'src/index.ts')],
      output: [
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
        },
        {
          format: 'commonjs',
          dir: 'lib',
          entryFileNames: '[name].js',
        },
      ],
      external:['vue'],
      // output:{
      //   globals: {
      //     vue: 'Vue',
      //   },
      // }
    }
  }
});