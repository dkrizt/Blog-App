import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base: '/Blog-App/', // Add base path for GitHub Pages
  plugins: [react()],
});
