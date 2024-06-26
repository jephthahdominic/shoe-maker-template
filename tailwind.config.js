/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['40px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      keyframes:{
        fade: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        }
      },
      animation: {
        'fade':'fade 3s linear 1'
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "tint": "#101010",
        "tesla-red":"#E82127",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "darkTransparent":"rgba(100, 100, 100, 0.5)"
      },
      backgroundImage: {
        'hero': "url('assets/images/Ellech_bg.png')",
      },
    },
  },
  plugins: [],
}

