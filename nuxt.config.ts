// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  vite: {
    server: {
      proxy: {
        "/docs/": {
          target: "http://localhost:5173", // Vitepress server address
          changeOrigin: true,
          ws: true,
        },
      },
    },
  },

  tailwindcss: {
    viewer: true,
    exposeConfig: true,
  },

  modules: ["@nuxtjs/tailwindcss"],
});
