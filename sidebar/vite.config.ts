import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "sidebar",
      exposes: {
        "./Sidebar": "./src/components/Sidebar.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  server: {
    port: 5003,
    strictPort: true,
  },
});
