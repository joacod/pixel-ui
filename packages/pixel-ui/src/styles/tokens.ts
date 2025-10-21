// Design tokens for Pixel UI
// Exports constants and types for use in components

/**
 * NES 8-bit Color Palette
 * Internal colors used by components - users should use the `variant` prop instead
 */
export const colors = {
  // Neutral shades
  nesBlack: '#000000',
  nesGrayDark: '#585858',
  nesGray: '#A1A1A1',
  nesWhite: '#FFFFFF',

  // Primary variant colors
  nesPrimary: '#3337FE',
  nesPrimaryHover: '#00237C',

  // Secondary variant colors
  nesSecondary: '#F15BFE',
  nesSecondaryHover: '#C92ED9',

  // Accent variant colors
  nesAccent: '#51DF21',
  nesAccentHover: '#093E00',

  // Error variant colors
  nesError: '#FE7269',
  nesErrorHover: '#D64339',

  // Warning variant colors
  nesWarning: '#ADB600',
  nesWarningHover: '#7D8400',

  // Success variant colors
  nesSuccess: '#7FFF7F',
  nesSuccessHover: '#51DF21',
} as const

/**
 * Component size scale
 */
export const sizes = {
  xs: '16px',
  sm: '24px',
  md: '32px',
  lg: '40px',
  xl: '48px',
} as const

/**
 * Spacing scale (8px grid)
 */
export const spacing = {
  0: '0',
  1: '8px',
  2: '16px',
  3: '24px',
  4: '32px',
  5: '40px',
  6: '48px',
  7: '56px',
  8: '64px',
  10: '80px',
  12: '96px',
  16: '128px',
  20: '160px',
  24: '192px',
  32: '256px',
} as const

/**
 * Font sizes aligned to pixel grid
 */
export const fontSize = {
  xs: '8px',
  sm: '12px',
  base: '16px',
  lg: '20px',
  xl: '24px',
  '2xl': '32px',
} as const

/**
 * Component variant types
 */
export type Variant =
  | 'base'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'ghost'
  | 'error'
  | 'success'
  | 'warning'

/**
 * Component size types
 */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/**
 * Standard component props that all components should accept
 */
export interface PixelComponentBaseProps {
  /**
   * Visual style variant
   */
  variant?: Variant

  /**
   * Component size
   */
  size?: Size

  /**
   * Disabled state
   */
  disabled?: boolean

  /**
   * Additional CSS classes
   */
  className?: string
}
