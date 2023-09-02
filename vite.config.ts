import viteImagemin from '@vheemstra/vite-plugin-imagemin';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';


// The minifiers you want to use:
import imageminJpeg from 'imagemin-mozjpeg';
import imageminPng from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      plugins: {
        jpg: imageminJpeg(),
        png: imageminPng(),
      },
      makeWebp: {
        plugins: {
          jpg: imageminWebp(),
          png: imageminWebp(),
        },
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
