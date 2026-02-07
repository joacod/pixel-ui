# 👾 Pixel UI Documentation App

Local documentation and component preview app for Pixel UI, built with [Fumadocs](https://fumadocs.dev) and Next.js.

This app serves as both the documentation and a live showcase of the Pixel UI component library during local development.

## Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
apps/www/
├── app/
│   ├── (home)/           # Landing page
│   ├── docs/             # Documentation pages
│   └── api/search/       # Search API
├── content/
│   └── docs/             # MDX documentation files
│       ├── index.mdx
│       ├── installation.mdx
│       └── components/   # Component documentation
├── lib/
│   ├── source.ts         # Content source adapter
│   └── layout.shared.tsx # Shared layout options
└── source.config.ts      # MDX configuration
```

## Adding Documentation

### 1. Create MDX file

Create a new `.mdx` file in `content/docs/`:

```mdx
---
title: New Component
description: Description of the component
---

import { NewComponent } from '@joacod/pixel-ui'

# New Component

Component documentation here...
```

### 2. Add live examples

Import and use components directly from `@joacod/pixel-ui`:

```tsx
import { Button } from '@joacod/pixel-ui'

;<Button variant="primary">Example</Button>
```

### 3. See it live

Changes to MDX files are automatically reflected in the development server.

## Learn More

- [Fumadocs Documentation](https://fumadocs.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [Pixel UI GitHub](https://github.com/joacod/pixel-ui)
