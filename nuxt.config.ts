// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  runtimeConfig: {
    // Private variables (server-side only)
    private: {
    },
    // Public variables (client and server)
    public: {
      docsTarget: process.env.NUXT_DOCS_TARGET,
    },
  },

  vite: {
    server: {
      proxy: {
        "/docs/": {
          target: process.env.NUXT_DOCS_TARGET!, // Vitepress server address
          changeOrigin: true,
          ws: true,
        },
      },
    },
  },



  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    viewer: true,
    exposeConfig: true,
    configPath: 'tailwind.config.ts',
  },

  modules: ["@nuxtjs/tailwindcss"]
});
