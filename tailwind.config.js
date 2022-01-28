module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#24495c',
      },
      width: {
        '136': '34rem',
        '128': '32rem',
        '120': '30rem',
        '112': '28rem',
        '108': '27rem',
        '104': '26rem',
        '98': '25rem',
        '96': '24rem',
        '94': '23rem',
        '92': '22rem',
        '90': '21rem',
        '80': '20rem',
        '76': '19rem',
        '72': '18rem',
        '68': '17rem',
        '64': '16rem',
        '60': '15rem',
        '56': '14rem',
      },
      height: {
        '136': '34rem',
        '128': '32rem',
        '120': '30rem',
        '112': '28rem',
        '108': '27rem',
        '104': '26rem',
        '98': '25rem',
        '96': '24rem',
        '94': '23rem',
        '92': '22rem',
        '90': '21rem',
        '80': '20rem',
        '76': '19rem',
        '72': '18rem',
        '68': '17rem',
        '64': '16rem',
        '60': '15rem',
        '56': '14rem',
      },
      boxShadow: {
        'user': '0px 10px 8px 0px rgba(0,0,0,0.35)',
        'userBtn': '0px 15px 12px -3px rgba(0,0,0,0.35)',
        'userBtnInset': '0px -4px 4px rgba(255,255,255,0.05), inset 0px -4px 4px rgba(255,255,255,0.05), 0px 4px 4px rgba(0,0,0,0.3), inset 0px 4px 4px rgba(0,0,0,0.3)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        '110': '110',
        '120': '120',
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
