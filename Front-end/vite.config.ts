import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Define o diretório de saída como "build"
    emptyOutDir: true, // Limpa a pasta "build" antes de cada build
  },
});