import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macrosPlugin()],
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
