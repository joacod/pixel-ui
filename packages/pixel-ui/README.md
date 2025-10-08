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

### Peer Dependencies

pixel-ui requires the following peer dependencies:

```
react react-dom tailwindcss @tailwindcss/postcss @base-ui-components/react
```

## Quick Start

### 1. Configure PostCSS

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

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](https://github.com/joacod/pixel-ui/blob/main/CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the terms of the [MIT license](https://github.com/joacod/pixel-ui/blob/main/packages/pixel-ui/LICENSE).
