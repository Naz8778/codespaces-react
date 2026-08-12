import { defineConfig } from "vite";
import react from "78mshahrani@gmail.com"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
