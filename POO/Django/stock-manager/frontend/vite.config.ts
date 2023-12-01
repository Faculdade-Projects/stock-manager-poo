import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const cssFileName = "index.min.css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./public",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: () => `assets/css/${cssFileName}`,
        entryFileNames: () => `assets/js/[name].min.js`,
      },
    },
  },
});
