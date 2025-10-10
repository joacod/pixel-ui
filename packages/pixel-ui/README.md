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

pixel-ui requires only React and React DOM:

```bash
npm install react react-dom
```

## Quick Start

### 1. Import Pixel UI Styles

In your app's CSS file (e.g., `app/globals.css` or `src/index.css`):

```css
@import '@joacod/pixel-ui/components';

/* Optional: Pixel font for the full retro experience */
@import '@joacod/pixel-ui/font';
```

**What's included:**

- ✅ **Design tokens** - Colors, spacing, font configuration
- ✅ **Tailwind utilities** - Pre-built utility classes
- ✅ **Base styles** - Pixel borders, rendering helpers
- ✅ **Components** - All component styles
- 🎨 **Font** (optional) - Pixel art font

> **Note:** The font import is optional but recommended for an authentic pixel-art look. If you skip it, components will use your system's default font.

### 2. Use Components

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
