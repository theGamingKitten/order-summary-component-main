/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    colors: {
      'pale-blue': 'hsl(225, 100%, 94%)',
      'bright-blue': 'hsl(245, 75%, 52%)',
      'very-pale-blue': 'hsl(225, 100%, 98%)',
      'desaturated-blue': 'hsl(224, 23%, 55%)',
      'dark-blue': 'hsl(223, 47%, 23%)',
      'hover-purple': 'hsl(245, 83%, 68%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      'red-hat-display': 'Red Hat Display',
    },
    extend: {
      backgroundImage: {
        'background-desktop': "url('./images/pattern-background-desktop.svg')",
        'background-mobile': "url('./images/pattern-background-mobile.svg')",
      }
    },
  },
  plugins: [],
}

