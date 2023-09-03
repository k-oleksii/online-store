import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';
import ViteImagemin from 'vite-plugin-imagemin';



// The minifiers you want to use:

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    macrosPlugin(),
  ],

  base: '/online-store/',
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  json: {
    namedExports: true,
  },
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled'],
  },
});
