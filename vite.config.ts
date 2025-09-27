
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('react-router-dom')) {
              return 'react-router-vendor';
            }
            if (id.includes('@radix-ui')) {
              return 'radix-ui-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'lucide-react-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'framer-motion-vendor';
            }
            if (id.includes('leaflet') || id.includes('react-leaflet')) {
              return 'leaflet-vendor';
            }
            if (id.includes('recharts')) {
              return 'recharts-vendor';
            }
            return 'vendor'; // Catch-all for other node_modules
          }
        },
      },
    },
  },
}));
