// https://tailwindcss.com/docs/configuration
module.exports = {
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js}'],
  safelist: [
    'editor-post-title',
    'p-name',
    'editor-styles-wrapper',
    'event_tribe_venue',
    'event_tribe_organizer',
    'event_url',
    'event_cost',
    'eventtable',
    'the-content',
    'alignwide',
    'alignfull',
  ],
  theme: {
    fontFamily: {
      serif: ['Signifier', 'Georgia', 'serif'],
      ui: ['Signifier', 'serif'],
      arsonist: ['Arsonist', 'sans-serif'],
    },
		fontSize: {
			xs: '0.75rem',
			sm: ['0.9rem', 1.1],
			base: ['1.325rem', 1.3],
			xl: ['1.5rem', 1.1],
			'2xl': ['2.2rem', 1.1],
			'3xl': ['2.5', 1.1],
			'4xl': ['3.125', 1],
			'5xl': ['4.625rem', 1.1],
		},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      salmon: {
        DEFAULT: '#ff9e6e',
        light: '#ffdf9f',
      },
      'blue-parrot': {
        DEFAULT: '#7e7cf8',
        light: '#B5B4FA',
      },
      black: '#000000',
    },

    fluidTypography: {
      remSize: 12,
      minScreenSize: 400,
      maxScreenSize: 1680,
      minTypeScale: 1.22,
      maxTypeScale: 1.618,
      lineHeight: 1.2,
    },
    extend: {
      colors: {}, // Extend Tailwind's default colors
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-text-fill-stroke'), // no options to configure
  ],
};
