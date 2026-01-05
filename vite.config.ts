import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Setup path aliases for cleaner imports, matching tsconfig.json paths
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    // Optionally set a specific port
    port: 3000,
    // Enable strict CORS handling for API development, if needed
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8080', // Example backend server
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
  build: {
    // Configure the output directory
    outDir: 'dist',
    // Set sourcemaps for better debugging
    sourcemap: true,
  },
});