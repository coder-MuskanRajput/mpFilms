
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base:"/mpFilms/",
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.jpeg'],
});
