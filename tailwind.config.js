/** @type {import('tailwindcss').Config} */
export default {
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
    extend: {
      colors: {
        primary: '#C92071',
      },
      // Se você quiser pré-definir tamanhos de galeria no Tailwind:
      // width: {
      //   'gallery-desktop': '700px',
      // },
      // height: {
      //   'gallery-desktop': '570px',
      // },
    },
  },
  plugins: [],
}
