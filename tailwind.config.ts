/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        text_yellow: "#FF951D",
        ligh_tText: "#828282",
        text_black: "#333333",
        card_bg: "#FFF5E9",
      },
      fontSize: {
        'title': '24px', 
        'sub_title': '12px', 
        'body': '16px', 
        
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'bold': 700,
      
      },

      fontFamily: {
        bodyFont: ["Nunito", ""],
      },
    },
  },
  plugins: [],
};
