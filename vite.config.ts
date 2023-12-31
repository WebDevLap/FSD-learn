import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/FSD-learn',
  resolve: {
    alias: {
      '@app': '/src/app',
      '@entities': '/src/entities',
      '@features': '/src/features',
      '@pages': '/src/pages',
      '@shared': '/src/shared',
      '@widgets': '/src/widgets',
    },
  },
});
