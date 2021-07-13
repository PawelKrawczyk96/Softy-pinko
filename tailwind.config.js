module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '80':'80px'
    },
    textColor: theme => theme('colors'),
    textColor:{
      'dark': '#1e1e1e',
      'white': 'white',
      'font-light': '#777777',
      'pink': '#ff589e'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'pink': '#ff589e'
     }),
    translate: {
      'nt55': '-55%'
    },
    lineHeight:{
      '16':'4rem',
      '12':'3rem',
      '8':'2rem',
      '7':'1.75rem'
    },
    zIndex:{
      'n1':'-1',
      '10':'10'
    },
    extend: {
      backgroundImage: theme => ({
        'welcome': "url('/dist/images/banner-bg.png')",
      })
    },
    
  },
  
  variants: {
    extend: {},
    
  },
  plugins: [],
}
