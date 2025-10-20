import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "notes",
      exposes: {
        "./Notes": "./src/pages/NotesPage.tsx",
        "./Tags": "./src/pages/TagsPage.tsx",
        "./Archived": "./src/pages/ArchivedPage.tsx",
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
    port: 5005,
    strictPort: true,
  },
});
