import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
// Redirects API requests from /api to http://localhost:8000.
//Helps avoid CORS issues when your frontend (Vite server) and backend (JSON Server, Express, etc.) run on different ports.
// Request Sent to Frontend	Redirects to Backend
// fetch("/api/users")	http://localhost:8000/users
// fetch("/api/jobs")	http://localhost:8000/jobs
// 5️⃣ Breakdown of Proxy Options
// Option	Purpose
// target: "http://localhost:8000"	API requests to /api are forwarded to http://localhost:8000.
// changeOrigin: true	Changes the origin of the request to match the target (useful for APIs with domain-based restrictions).
// rewrite: (path) => path.replace(/^\/api/, "")	Removes /api from the request before sending it to the backend.