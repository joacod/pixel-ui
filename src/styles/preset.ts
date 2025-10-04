// Tailwind preset for pixel-ui
// Exports a comprehensive Tailwind configuration with pixel art design system

import type { Config } from 'tailwindcss'

const pixelPreset: Partial<Config> = {
  theme: {
    extend: {
      // NES 8-bit Color Palette
      colors: {
        // Dark shades
        'nes-black': '#000000',
        'nes-gray-dark': '#585858',
        'nes-gray': '#A1A1A1',
        'nes-white': '#FFFFFF',

        // Primary colors
        'nes-red': '#FE5EC4',
        'nes-red-dark': '#A62721',
        'nes-blue': '#0B53D7',
        'nes-blue-dark': '#00237C',
        'nes-green': '#79D300',
        'nes-green-dark': '#093E00',
        'nes-yellow': '#F4D199',
        'nes-yellow-dark': '#864300',
        'nes-purple': '#BC6AFE',
        'nes-purple-dark': '#6621F7',

        // UI semantic colors
        'nes-primary': '#3337FE', // Bright blue
        'nes-secondary': '#F15BFE', // Bright magenta
        'nes-accent': '#51DF21', // Bright green
        'nes-error': '#FE7269', // Light red
        'nes-warning': '#ADB600', // Yellow-green
        'nes-success': '#51DF21', // Bright green
      },

      // Typography - Press Start 2P pixel font
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
      },

      // Pixel border box-shadow utilities
      boxShadow: {
        pixel: '2px 2px 0 0 currentColor',
        'pixel-lg': '4px 4px 0 0 currentColor',
        'pixel-xl': '6px 6px 0 0 currentColor',
        'pixel-inset': 'inset 2px 2px 0 0 rgba(0, 0, 0, 0.2)',
        'pixel-inset-lg': 'inset 4px 4px 0 0 rgba(0, 0, 0, 0.2)',
      },

      // 8px base grid spacing (overrides default Tailwind spacing)
      spacing: {
        px: '1px',
        '0': '0',
        '1': '8px', // 1 unit = 8px
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '7': '56px',
        '8': '64px',
        '10': '80px',
        '12': '96px',
        '16': '128px',
        '20': '160px',
        '24': '192px',
        '32': '256px',
      },

      // Component size scale (height values)
      height: {
        xs: '16px',
        sm: '24px',
        md: '32px',
        lg: '40px',
        xl: '48px',
      },

      // Font sizes aligned to pixel grid
      fontSize: {
        xs: ['8px', { lineHeight: '1.5' }],
        sm: ['12px', { lineHeight: '1.5' }],
        base: ['16px', { lineHeight: '1.5' }],
        lg: ['20px', { lineHeight: '1.5' }],
        xl: ['24px', { lineHeight: '1.5' }],
        '2xl': ['32px', { lineHeight: '1.2' }],
      },

      // Border radius - minimal for pixel aesthetic
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '4px',
        lg: '8px',
      },

      // Animation - simple, no easing for retro feel
      transitionTimingFunction: {
        pixel: 'steps(4, end)',
      },

      // Border widths for pixel borders
      borderWidth: {
        DEFAULT: '2px',
        '0': '0',
        '2': '2px',
        '4': '4px',
        '8': '8px',
      },
    },
  },
  plugins: [],
}

export default pixelPreset
