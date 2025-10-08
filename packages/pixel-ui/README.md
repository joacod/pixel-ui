# 👾 Pixel UI

Opinionated pixel-art styled React component library built on [Base UI](https://base-ui.com) and Tailwind CSS v4.

## Features

- 🎮 **Authentic pixel-art aesthetic** - NES-inspired 8-bit design system
- ⚡ **Built on Base UI** - Accessible, unstyled React primitives
- 🎨 **Tailwind CSS powered** - CSS-first configuration
- 📦 **Zero-config** - Just import and use
- 🔒 **Type-safe** - Full TypeScript support

## Installation

```bash
npm install @joacod/pixel-ui
```

## Quick Start

### 1. Setup PostCSS (if not already configured)

Create or update `postcss.config.js` in your project root:

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

### 2. Import Pixel UI styles

In your app's CSS file (e.g., `app/globals.css` or `src/index.css`):

```css
@import '@joacod/pixel-ui/components';
```

That's it! This single import includes:

- ✅ Design tokens (colors, spacing, fonts)
- ✅ Tailwind CSS utilities
- ✅ Base styles (pixel borders, pixel rendering, etc.)
- ✅ Pre-built component styles (Button, Input, Checkbox, etc.)

> **Note:** All styles are pre-generated at build time, so you don't need to configure Tailwind to scan `node_modules` or add any `@source` directives. Just one import and you're ready to go!

### 3. Use Components

```tsx
import { Button } from '@joacod/pixel-ui'

export default function App() {
  return (
    <Button variant="primary" size="md" onClick={() => alert('Hello!')}>
      Click me
    </Button>
  )
}
```

## Requirements

- React 19+
- Tailwind CSS v4+
- Base UI Components 1.0.0-beta.4+

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](https://github.com/joacod/pixel-ui/blob/main/CONTRIBUTING.md) for guidelines.
