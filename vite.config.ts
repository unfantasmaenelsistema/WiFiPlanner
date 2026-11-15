import tailwindcss from '@tailwindcss/vite';
import {defineConfig} from 'vite';

// App estática (HTML + JS en línea); Vite solo compila Tailwind. Base relativa: funciona en
// GitHub Pages (/WiFiPlanner/) y en cualquier subcarpeta.
export default defineConfig({
  base: './',
  plugins: [tailwindcss()],
});
