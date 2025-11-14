import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "analyze" && visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks for better caching
          if (id.includes("node_modules/react")) {
            return "vendor-react";
          }
          if (id.includes("node_modules/@radix-ui")) {
            return "vendor-ui";
          }
          if (id.includes("node_modules/@hookform") || id.includes("react-hook-form")) {
            return "vendor-forms";
          }
          if (id.includes("node_modules/react-router")) {
            return "vendor-routing";
          }
          if (id.includes("node_modules/@tanstack/react-query")) {
            return "vendor-query";
          }
          if (id.includes("node_modules/framer-motion")) {
            return "vendor-animation";
          }
          if (id.includes("node_modules/recharts")) {
            return "vendor-charts";
          }
          if (id.includes("node_modules/leaflet") || id.includes("react-leaflet")) {
            return "vendor-maps";
          }
        },
      },
    },
  },
  css: {
    postcss: "./postcss.config.js",
    preprocessorOptions: {
      scss: {
        additionalData: ``,
      },
    },
  },
  ssr: {
    noExternal: ["sonner", "next-themes"],
  },
}));
