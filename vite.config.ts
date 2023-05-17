import { defineConfig } from 'vite';import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    port: 8080,
    https: true,
  },
});
