/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      boxShadow:{ 
        form_box_shadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      maxWidth:{
     from_box_maxWidth: "35rem",
     Portfolio_width : "70%",
      },
      animation:{
        blob:"blob 4s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform:  " translate(0px ,0px) scale(1)",
          },

          "33%": {
            transform: " translate(0px ,-50px) scale(1.1)",
          },

          "66%": {
            transform: " translate(-20px ,20px) scale(0.9)",
          },
          "100%": {
            transform: " translate(0px ,0px) scale(0.9)",
          },
        },
      },
    },
  },
};
