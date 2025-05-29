/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html","./app.vue", "./pages/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        saga: {
          dark: "#25253c",
          medium: "#654c7d",
          light: "#fff1e9",
          verylight: "#8f7182",
          yellow: "#dea573",
          red: "#c87f80"
        },
      },

      container: {
        center: true,
      },
    },
  },
};
