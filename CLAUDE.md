# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pixel UI is a pixel-art styled React component library built on [Base UI](https://base-ui.com) with Tailwind CSS v4. This is a pnpm monorepo containing:

- `packages/pixel-ui` - The component library (published to npm as `@joacod/pixel-ui`)
- `apps/www` - Documentation site built with Next.js and Fumadocs

## Essential Commands

```bash
# Development
pnpm dev                # Run docs site with hot reload
pnpm build              # Build everything (library + docs)
pnpm build:lib          # Build library only
pnpm build:docs         # Build docs only
pnpm type-check         # Type check library

# Release workflow (uses Changesets)
pnpm changeset          # Create a changeset for version management
pnpm release            # Build library and publish to npm (CI handles this)
```

## Architecture

### Monorepo Structure

- Uses **pnpm workspaces** with workspace protocol (`workspace:*`) for internal dependencies
- Root package.json delegates commands to packages via `pnpm --filter`
- `packages/pixel-ui` is the source of truth for components
- `apps/www` consumes the library as a workspace dependency

### Component Architecture

Components follow this pattern:

- **TypeScript component file** (e.g., `Button.tsx`) using React.forwardRef
- **Separate styles file** (e.g., `Button.styles.ts`) exporting Tailwind class strings organized by base/variants/sizes
- **Index file** (e.g., `index.ts`) for clean exports
- Components are built on Base UI primitives for accessibility

Example component structure:

```
src/components/Button/
├── Button.tsx          # Component logic with forwardRef
├── Button.styles.ts    # Tailwind classes organized by concern
└── index.ts           # Exports
```

### Design Tokens System

Design tokens exist in **two places**:

1. **TypeScript** (`src/styles/tokens.ts`) - Exports colors, sizes, spacing, fontSize constants and Variant/Size types
2. **CSS** (`src/styles/theme.css`) - Tailwind v4 @theme directive with CSS custom properties

These should be kept in sync. The CSS version is the source of truth for Tailwind utilities.

### Styling Architecture (Tailwind v4)

- **theme.css**: Defines design tokens using `@theme` directive with CSS custom properties
- **base.css**: Global pixel rendering styles and utility classes (`.pixel-border`, `.pixel-render`, etc.)
- **preset.css**: Imports theme → Tailwind CSS → base styles in correct order, includes Press Start 2P font

All three CSS files are:

1. Built and copied to `dist/styles/` via `scripts/copy-styles.mjs`
2. Exported in package.json under `./styles`, `./preset`, `./theme` paths

### Build System

- **tsdown**: Bundles TypeScript to ESM in `dist/`
- **copy-styles.mjs**: Copies CSS files from `src/styles/` to `dist/styles/`
- Both run in sequence via `pnpm build:lib`

### Pixel-Art Design Principles

- **8px grid system**: All spacing uses 8px increments (overrides Tailwind's default 4px)
- **Pixel borders**: Use `box-shadow` instead of traditional borders (see `.pixel-border` utility)
- **No transitions**: `transition-none` for instant, retro feel
- **Pixel-perfect rendering**: `image-rendering: pixelated`, no font smoothing
- **Press Start 2P font**: Loaded from Google Fonts in preset.css

### Component Patterns

When adding new components:

1. Define props interface extending common patterns (variant, size, disabled, className)
2. Use `React.forwardRef` for ref forwarding
3. Create styles object in separate `.styles.ts` file with base/variants/sizes
4. Use `cn()` utility (from `utils/cn.ts`) to merge classes
5. Export component and types from index.ts
6. Add to main `src/index.ts` exports
7. Create MDX documentation in `apps/www/content/docs/components/`
8. Add component to `apps/www/content/docs/components/meta.json` to make it visible in the documentation sidebar

### Type Safety

- All components use TypeScript with strict mode
- Variant and Size types are centralized in `src/styles/tokens.ts`
- Props interfaces should extend `PixelComponentBaseProps` or include standard props (variant, size, disabled, className)

### Documentation Site

- Built with Next.js 15 and Fumadocs
- MDX content in `apps/www/content/docs/`
- Automatically imports and showcases components from `@joacod/pixel-ui`
- Run with `pnpm dev` from root
