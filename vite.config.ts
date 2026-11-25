import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // Permitir cualquier conexión
    port: 8080, // Puerto personalizado
  },
  plugins: [
    react(), // Plugin para React
    mode === 'development' && componentTagger(), // Solo para desarrollo
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias para 'src'
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json"], // Extensiones explícitas
  },
  logLevel: "info", // Habilitar logs detallados
  optimizeDeps: {
    include: [
      "@reown/appkit/react",
      "@reown/appkit-adapter-wagmi",
      "@reown/appkit-adapter-solana",
      "@reown/appkit-adapter-bitcoin",
      "@supabase/supabase-js",
    ],
  },
  build: {
    minify: "esbuild",
    rollupOptions: {
      treeshake: false,
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@reown") || id.includes("wagmi") || id.includes("viem") || id.includes("@walletconnect") || id.includes("ox/")) return "wallet";
            if (id.includes("@supabase")) return "supabase";
            if (id.includes("react-router")) return "router";
            if (id.includes("framer-motion")) return "animation";
            return "vendor";
          }
        },
      },
    },
  },
}));
