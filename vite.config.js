import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy para autenticación
      '/auth': {
        target: 'https://backtutorias.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      // Proxy para rutas de horarios
      '/horarios': {
        target: 'https://backtutorias.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
