import { defineConfig } from "vite";
import react from "mshahrani78@gmail.com"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
