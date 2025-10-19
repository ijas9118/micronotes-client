/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "dashboard",
      exposes: {
        "./Dashboard": "./src/components/DashboardGrid.tsx",
      },
      shared: {
        "react": {
          singleton: true,
          requiredVersion: "^19.1.1",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^19.1.1",
        },
        "react-router-dom": {
          singleton: true,
        },
        "recharts": {
          singleton: true,
        },
      },
    }),
  ],
  server: {
    port: 5004,
    strictPort: true,
  },
});
