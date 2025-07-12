import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  "content": {
    "files": [
      // all directories and extensions will correspond to your Nuxt config
      "{srcDir}/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/plugins/**/*.{js,ts,mjs}",
      "{srcDir}/composables/**/*.{js,ts,mjs}",
      "{srcDir}/utils/**/*.{js,ts,mjs}",
      "{srcDir}/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
      "{srcDir}/app.config.{js,ts,mjs}",
      "{srcDir}/app/spa-loading-template.html"
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
