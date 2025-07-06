import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        projects: './projects.html',
        about: './about.html',
        contact: './contact.html'
      }
    }
  }
});