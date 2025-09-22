import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // Permitir cualquier conexión
    port: 3000, // Puerto personalizado
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
}));
