// https://nuxt.com/docs/api/configuration/nuxt-config

const config = useRuntimeConfig()

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  runtimeConfig: {
    runtimeConfig: {
      // Private variables (server-side only)
      private: {
      },
      // Public variables (client and server)
      public: {
        docsTarget: process.env.NUXT_DOCS_TARGET,
      },
    },
  },

  vite: {
    server: {
      proxy: {
        "/docs/": {
          target: config.public.docsTarget!, // Vitepress server address
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
