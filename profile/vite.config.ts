import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "profile",
      exposes: {
        "./Profile": "./src/pages/ProfilePage.tsx",
        "./Settings": "./src/pages/SettingsPage.tsx",
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
      },
    }),
  ],
  server: {
    port: 5006,
    strictPort: true,
  },
});
