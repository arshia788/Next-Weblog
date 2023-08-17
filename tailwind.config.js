/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens:{
        "xs":'100px',
        "sm":"640px",
        "md":"768px",
      },
      minHeight:{
        "10/12":"83vh"
      },
      
    },
  },
  plugins: [],
}

