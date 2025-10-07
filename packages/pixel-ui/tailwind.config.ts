// Tailwind configuration for local development and testing
import type { Config } from 'tailwindcss'
import pixelPreset from './src/styles/preset'

const config: Config = {
  presets: [pixelPreset],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
}

export default config
