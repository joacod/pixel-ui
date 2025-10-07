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

### 2. Import the Pixel UI preset

In your app's CSS file (e.g., `app/globals.css` or `src/index.css`):

```css
@import '@joacod/pixel-ui/preset';
```

> The preset takes care of loading the design tokens, Tailwind CSS, and the library base styles in the correct order. If you need more control, you can import `@joacod/pixel-ui/theme`, `tailwindcss`, and `@joacod/pixel-ui/styles` individually.

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

Contributions are welcome! Please visit our [GitHub repository](https://github.com/joacod/pixel-ui) for more information.
