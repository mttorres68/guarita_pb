import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    allowedHosts: true,
  },
  resolve:{
    alias:{
      "@": path.resolve(__dirname, "./src")
    }
  },
  plugins: [react(), tailwindcss()],
});
