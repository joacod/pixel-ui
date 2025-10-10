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

### Changeset Format

When completing a changeset, use this format:

```markdown
---
'@joacod/pixel-ui': <major|minor|patch>
'www': <major|minor|patch>
---

<Title of the change - imperative mood, capitalized>

<Optional: Brief description paragraph>

- <Bullet point describing the change>
- <Bullet point describing the change>
- <Bullet point describing the change>

<Optional: Additional sections for features, fixes, breaking changes, etc.>
```

**Version bump guidelines:**

- `major` - Breaking changes to the public API
- `minor` - New features, new components, significant enhancements
- `patch` - Bug fixes, documentation updates, minor tweaks

**Example:**

```markdown
---
'@joacod/pixel-ui': minor
'www': patch
---

Add Checkbox and CheckboxGroup components - Pixel-art styled form controls with accessibility features

- New Checkbox component built on Base UI Checkbox primitive
- Compound component pattern with `Checkbox.Root` and `Checkbox.Indicator`
- States: checked, unchecked, indeterminate, disabled, readonly, required
- Pixel-art styling with box-shadow borders and instant transitions
- Full accessibility support with keyboard navigation and ARIA attributes

- New CheckboxGroup component for managing multiple checkbox state
- Supports controlled and uncontrolled modes
- Parent checkbox functionality for "select all" behavior via `allValues` prop
- Group-wide disabled state with proper propagation
- Comprehensive MDX documentation with interactive examples
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

The library exports a single all-in-one CSS file: **components.css**

This file includes everything consumers need:

- Design tokens from `theme.css` (CSS custom properties via `@theme` directive)
- Tailwind CSS utilities
- Base pixel rendering styles and utilities from `base.css` (`.pixel-border`, `.pixel-render`, etc.)
- Pixel font
- Pre-built component styles extracted from all `*.styles.ts` files

The components.css file is generated at build time by:

1. Scanning all `*.styles.ts` files for Tailwind class strings
2. Creating a temporary CSS file that imports theme → tailwind → base → component classes
3. Processing with Tailwind CLI to generate the final all-in-one CSS
4. This eliminates the need for consumers to scan `node_modules` or use `@source` directives

**Consumer setup (single import):**

```css
@import '@joacod/pixel-ui/components'; /* Everything you need */
```

### Build System

The library uses a three-step build process:

1. **generate-components-css.mjs**: Extracts Tailwind classes from all `*.styles.ts` files and generates `src/styles/components.css` with pre-built component styles
2. **tsdown**: Bundles TypeScript to ESM in `dist/`
3. **copy-styles.mjs**: Copies all CSS files from `src/styles/` to `dist/styles/` and font assets from `src/assets/` to `dist/assets/`

All three run in sequence via `pnpm build:lib`

### Pixel-Art Design Principles

- **8px grid system**: All spacing uses 8px increments (overrides Tailwind's default 4px)
- **Pixel borders**: Use `box-shadow` instead of traditional borders (see `.pixel-border` utility)
- **No transitions**: `transition-none` for instant, retro feel
- **Pixel-perfect rendering**: `image-rendering: pixelated`, no font smoothing
- **Pixel font**: Provided by @fontsource npm package, imported in base.css

### Dark Mode Guidelines

When adding or modifying component styles, ensure proper dark mode support:

- **Backgrounds**: Use `dark:bg-nes-gray-dark` for component backgrounds
- **Borders**: Always pair `border-nes-black` with `dark:border-nes-white` for visibility
- **Box shadows**: Add dark variants like `dark:shadow-[2px_2px_0_0_theme(colors.nes.white)]`
- **Text colors**: Pair `text-nes-black` with `dark:text-nes-white`
- **Focus rings**: Use `dark:focus-visible:ring-nes-secondary` for better contrast
- **Hover states**: Include dark mode shadows for interactive elements

Default dark mode colors:

- Background: `nes-gray-dark` (#585858)
- Text/Borders: `nes-white` (#FFFFFF)
- Primary accent colors (primary, secondary, accent, etc.) remain the same in both modes

### Component Patterns

When adding new components:

1. Define props interface extending common patterns (variant, size, disabled, className)
2. Use `React.forwardRef` for ref forwarding
3. Create styles object in separate `.styles.ts` file with base/variants/sizes
4. Use `cn()` utility (from `utils/cn.ts`) to merge classes
5. Export component and types from index.ts
6. Add to main `src/index.ts` exports
7. **Run `pnpm build:lib` to regenerate `components.css`** with the new component's styles
8. Create MDX documentation in `apps/www/content/docs/components/`
9. Add component to `apps/www/content/docs/components/meta.json` to make it visible in the documentation sidebar

**Important:** Component styles in `.styles.ts` files are extracted at build time and included in `components.css`. After adding or modifying component styles, always rebuild the library to regenerate this file.

### Type Safety

- All components use TypeScript with strict mode
- Variant and Size types are centralized in `src/styles/tokens.ts`
- Props interfaces should extend `PixelComponentBaseProps` or include standard props (variant, size, disabled, className)

### Documentation Site

- Built with Next.js 15 and Fumadocs
- MDX content in `apps/www/content/docs/`
- Automatically imports and showcases components from `@joacod/pixel-ui`
- Run with `pnpm dev` from root
