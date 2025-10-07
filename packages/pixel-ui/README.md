# 👾 Pixel UI

Opinionated pixel-art styled React component library built on [Base UI](https://base-ui.com).

## Features

- 🎮 **Authentic pixel-art aesthetic** - NES-inspired 8-bit design system
- ⚡ **Built on Base UI** - Accessible, unstyled React primitives
- 🎨 **Tailwind CSS v4** - Customizable through Tailwind configuration
- 📦 **Zero-config** - Works out of the box with minimal setup
- 🔒 **Type-safe** - Full TypeScript support

## Installation

```bash
npm install @joacod/pixel-ui
```

## Quick Start

### 1. Install Tailwind CSS v4 (if not already installed)

```bash
npm install tailwindcss@next
```

### 2. Import the preset in your Tailwind config

```ts
// tailwind.config.ts
import pixelPreset from '@joacod/pixel-ui/preset'

export default {
  presets: [pixelPreset],
  // your other config...
}
```

### 3. Import the base styles

```tsx
// app/layout.tsx or your root component
import '@joacod/pixel-ui/styles'
```

### 4. Use the components

```tsx
import { Button } from '@joacod/pixel-ui'

export default function App() {
  return (
    <Button variant="primary" onClick={() => alert('Hello!')}>
      Click me
    </Button>
  )
}
```

## Requirements

- React 19+
- Tailwind CSS v4+
- Base UI Components 1.0.0-beta.4+

## License

MIT © [Joaquin Diaz](https://github.com/joacod)

## Contributing

Contributions are welcome! Please visit our [GitHub repository](https://github.com/joacod/pixel-ui) for more information.
