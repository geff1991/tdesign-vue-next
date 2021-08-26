import * as path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import createTDesignPlugin from './plugin-tdoc';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/vue-next/' : './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../'),
      '@tencent/tdesign-vue-next/lib': path.resolve(__dirname, '../src'),
      '@tencent/tdesign-vue-next': path.resolve(__dirname, '../src'),
      '@common': path.resolve(__dirname, '../src/_common'),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 17000,
    open: '/',
    https: false,
    fs: {
      allow: ['..']
    },
  },
  build: {
    outDir: '../_site',
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('td-')
        }
      }
    }),
    vueJsx(),
    createTDesignPlugin(),
  ]
})
