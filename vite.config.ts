import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://wzuqui.github.io/IFSC-2021-Prototipo-Loja-de-Roupa/',
  plugins: [react()],
});
