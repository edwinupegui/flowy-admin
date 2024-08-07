import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(135deg, #0a0b5e 5%, #00bfff 50%, #8a2be2 90%)',
      },
      colors: {
        primary: {
          DEFAULT: '#573BD5',
          foreground: 'white',
        },
        secondary: {
          DEFAULT: '#3C8ED3',
          foreground: 'white',
        },
        danger: {
          DEFAULT: '#FF592B',
          foreground: 'white',
        },
        // default: {
        //   DEFAULT: '#F1F1F1',
        //   foreground: 'white',
        // },
        success: {
          DEFAULT: '#6FE3C5',
          foreground: 'white',
        },
        warning: {
          DEFAULT: '#FFDD05',
          foreground: 'white',
        },
      },
      images: {
        login: "url('./public/images/fondo-inicio-sesion-hd.png')",
      },
    },
  },
  plugins: [nextui()],
}

export default config
