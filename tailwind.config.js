/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  extend: {
    rotate: {
      75: '75deg',
    },
  },
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  safelist: ['btn-primary', 'btn-secondary', 'btn-terciary', 'btn-disabled'],
  theme: {
    // screens: {
    //   sm: { min: '0px', max: '706px' },
    //   md: '706px',
    // },
    extend: {
      fontFamily: {
        title: ['Outfit', 'sans-serif'],
        mono: ['NimbusMono', 'mono'],
      },
      fontSize: {
        // '9xl': '86px',
        // '8xl': '82px',
        // '7xl': '68px',
        // '6xl': '45px',
        // '5xl': '40px',
        // '4xl': '28px',
        // '3xl': '26px',
        // '2xl': '21px',
        // xl: '19px',
        // lg: '18px',
        // base: '17px',
        // sm: '14px',
        // xs: '12px',
        // text-xl	font-size: 1.25rem; /* 20px */
        // text-2xl	font-size: 1.5rem; /* 24px */
        // text-3xl	font-size: 1.875rem; /* 30px */
        // text-4xl	font-size: 2.25rem; /* 36px */
        // text-5xl	font-size: 3rem; /* 48px */
        // text-6xl	font-size: 3.75rem; /* 60px */
        // text-7xl	font-size: 4.5rem; /* 72px */
        // text-8xl	font-size: 6rem; /* 96px */
        // text-9xl	font-size: 8rem; /* 128px */

      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '32px',
        xl: '40px',
        '2xl': '140px',
        '3xl': '360px',
        'c-3xl': '550px',
        'c-4xl': '900px',
        'sm-x-screen': '15vw',
        'md-x-screen': '50vw',
        '2-md-x-screen': '70vw',
        'lg-x-screen': '90vw',
        'xl-x-screen': '100vw',
        'sm-y-screen': '15vh',
        'md-y-screen': '50vh',
        '2-md-y-screen': '70vh',
        'lg-y-screen': '90vh',
        'xl-y-screen': '100vh',
        96: '420px'
      },
    },
    colors: {
      white: {
        50: '#ffffff',
        100: '#efefef',
        200: '#dcdcdc',
        300: '#bdbdbd',
        400: '#989898',
        500: '#7c7c7c',
        600: '#656565',
        700: '#525252',
        800: '#464646',
        900: '#3d3d3d',
        950: '#292929',
      },
      gray: {
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#707070',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#262626',
      },
      black: {
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#232323',
      },
      'wit-blue': {
        50: '#ebfffe',
        100: '#cefffe',
        200: '#a2feff',
        300: '#63fafd',
        400: '#1cecf4',
        500: '#00e2ed',
        600: '#03a6b7',
        700: '#0a8494',
        800: '#126978',
        900: '#145765',
        950: '#063a46',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    borderRadius: {
      none: '0',
      sm: '.125rem',
      DEFAULT: '.25rem',
      lg: '.5rem',
      full: '9999px',
    },

    opacity: {
      0: '0',
      20: '0.2',
      40: '0.4',
      60: '0.6',
      80: '0.8',
      100: '1',
    },
  },
  plugins: [],
}
