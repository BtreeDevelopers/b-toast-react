import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ include: ["src/package"], exclude: ["vite.config.ts"] }),
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/package/index.tsx"),
      name: "b-toast-react",
      fileName: "b-toast-react",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
