import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path-browserify';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Set alias for `src` directory
    },
  },
  
})