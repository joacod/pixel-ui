# 👾 Pixel UI Monorepo

Opinionated pixel-art styled React component library built on [Base UI](https://base-ui.com).

This is a monorepo containing:

- **packages/pixel-ui** - The component library (published to npm)
- **apps/www** - Documentation site

## For Users

Looking to use Pixel UI in your project? Check out the [npm package](https://www.npmjs.com/package/@joacod/pixel-ui).

## For Contributors

### Prerequisites

- Node.js 20+
- pnpm 9+

### Setup

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Run docs site (with hot reload)
pnpm dev

# Build library only
pnpm build:lib

# Build docs only
pnpm build:docs

# Build everything
pnpm build

# Type check library
pnpm type-check
```

### Project Structure

```
pixel-ui/
├── packages/
│   └── pixel-ui/          # Component library
│       ├── src/           # Source code
│       ├── dist/          # Built files (published to npm)
│       └── package.json   # Published as @joacod/pixel-ui
└── apps/
    └── www/               # Documentation site
        ├── app/           # Next.js app
        └── content/       # MDX documentation
```

### Publishing

The library uses [Changesets](https://github.com/changesets/changesets) for version management:

```bash
# Create a changeset
pnpm changeset

# Build and publish (CI handles this automatically)
pnpm release
```

### Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.
