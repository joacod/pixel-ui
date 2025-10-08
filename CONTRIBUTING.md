# Contributing to Pixel UI

Thank you for your interest in contributing to Pixel UI! We welcome contributions from the community.

## Prerequisites

- Node.js 20+
- pnpm 9+

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/pixel-ui.git
   cd pixel-ui
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```

## Development Workflow

### Making Changes

1. Create a feature branch:

   ```bash
   git checkout -b feature/amazing-feature
   ```

2. Make your changes in the appropriate package:

   - Component changes go in `packages/pixel-ui/`
   - Documentation changes go in `apps/www/`

3. Test your changes:

   ```bash
   # Run docs site with hot reload
   pnpm dev

   # Type check
   pnpm type-check

   # Build library
   pnpm build:lib
   ```

### Committing Changes

1. Stage your changes:

   ```bash
   git add .
   ```

2. Create a changeset to describe your changes:

   ```bash
   pnpm changeset
   ```

   Select the appropriate packages and version bump type (patch/minor/major).

3. Commit your changes with a descriptive message:
   ```bash
   git commit -m 'Add amazing feature'
   ```

### Submitting a Pull Request

1. Push to your fork:

   ```bash
   git push origin feature/amazing-feature
   ```

2. Open a Pull Request from your fork to the main repository
3. Ensure all CI checks pass
4. Wait for review and address any feedback

## Project Structure

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

## Code Style

- Follow the existing code style
- Use TypeScript for all new code
- Ensure type safety with proper TypeScript types
- Follow React best practices

## Questions?

Feel free to open an issue if you have any questions or need help getting started!
