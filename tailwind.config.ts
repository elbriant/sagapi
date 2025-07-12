import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  "content": {
    "files": [
      // all directories and extensions will correspond to your Nuxt config
      "./components/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "./layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "./pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "./plugins/**/*.{js,ts,mjs}",
      "./composables/**/*.{js,ts,mjs}",
      "./utils/**/*.{js,ts,mjs}",
      "./{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
      "./{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
      "./app.config.{js,ts,mjs}",
      "./app/spa-loading-template.html"
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", 'sans-serif']
      },

      colors: {
        saga: {
          verydark: "#111119",
          dark: "#25253c",
          medium: "#654c7d",
          light: "#fff1e9",
          verylight: "#8f7182",
          yellow: "#dea573",
          red: "#c87f80"
        },
      },

      animation: {
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
      },


      container: {
        center: true,
      },
    },
  },

  plugins: [
    require("@designbycode/tailwindcss-text-shadow")
  ]
};
