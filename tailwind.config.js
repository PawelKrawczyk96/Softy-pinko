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
    },
    translate: {
      'm55': '-55%'
    },
    lineHeight:{
      '16':'4rem',
      '12':'3rem',
      '8':'2rem'
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
