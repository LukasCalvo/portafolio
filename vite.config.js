import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portafolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-bootstrap') || id.includes('bootstrap')) {
              return 'vendor';
            }
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})