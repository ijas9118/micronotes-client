import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "host",
      remotes: {
        auth: "http://localhost:5001/assets/remoteEntry.js",
        ui: "http://localhost:5002/assets/remoteEntry.js",
        sidebar: "http://localhost:5003/assets/remoteEntry.js",
        dashboard: "http://localhost:5004/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  server: {
    port: 5050,
    strictPort: true,
  },
});
