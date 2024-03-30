import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: "globalThis",
    "process.env": process.env,
  },
  resolve: {
    alias: [
      {
        find: "web3",
        replacement: "web3/dist/web3.min.js",
      },
    ],
  },
});
