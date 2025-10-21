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

### Changeset Best Practices

**IMPORTANT:** To keep changelogs clean and separated by package, follow these rules:

1. **One package affected** → Create one changeset file with only that package
2. **Multiple packages affected** → Create separate changeset files for each package

This ensures each package's CHANGELOG only contains changes relevant to that specific package.

**When to create separate changesets:**

- ✅ Library changes (code, types, exports) → Separate changeset for `@joacod/pixel-ui`
- ✅ Documentation changes (MDX, examples, guides) → Separate changeset for `www`
- ✅ Both changed in one PR → Create TWO separate changeset files

**Version bump guidelines:**

- `major` - Breaking changes to the public API
- `minor` - New features, new components, significant enhancements
- `patch` - Bug fixes, documentation updates, minor tweaks

### Changeset Format

**Single package changeset:**

```markdown
---
'@joacod/pixel-ui': <major|minor|patch>
---

<Title of the change - imperative mood, capitalized>

<Optional: Brief description paragraph>

- <Bullet point describing the change>
- <Bullet point describing the change>
- <Bullet point describing the change>

<Optional: Additional sections for features, fixes, breaking changes, etc.>
```

**Example - Library change only:**

```markdown
---
'@joacod/pixel-ui': minor
---

Add Checkbox and CheckboxGroup components

Pixel-art styled form controls with accessibility features.

- New Checkbox component built on Base UI Checkbox primitive
- Compound component pattern with `Checkbox.Root` and `Checkbox.Indicator`
- States: checked, unchecked, indeterminate, disabled, readonly, required
- Pixel-art styling with box-shadow borders and instant transitions
- Full accessibility support with keyboard navigation and ARIA attributes
- New CheckboxGroup component for managing multiple checkbox state
- Supports controlled and uncontrolled modes
- Parent checkbox functionality for "select all" behavior via `allValues` prop
```

**Example - Documentation change only:**

```markdown
---
'www': patch
---

Add Checkbox component documentation

- Comprehensive MDX documentation with interactive examples
- Usage examples for controlled and uncontrolled modes
- Accessibility guidelines and keyboard navigation examples
```

**Multiple changesets in one PR:**

When a PR includes both library and documentation changes, run `pnpm changeset` twice to create two separate files:

```bash
# First changeset for library changes
pnpm changeset
# Select @joacod/pixel-ui, describe library changes

# Second changeset for documentation changes
pnpm changeset
# Select www, describe documentation changes
```

### Version Synchronization

**IMPORTANT:** When asked about complete or improve current changesets that bump the `@joacod/pixel-ui` version, you MUST update the documentation site version reference:

1. **After creating a library changeset** that changes the version (major/minor/patch)
2. **Update** `apps/www/lib/config.ts` → Change `LIBRARY_VERSION` to match the new version
3. This ensures the version badge in the docs navigation stays synchronized with the published package

**Location:** The version is displayed in the docs navigation header as a badge linking to npm. It's sourced from `apps/www/lib/config.ts` which exports:

- `LIBRARY_VERSION` - The version string (e.g., '0.12.1')
- `NPM_PACKAGE_URL` - npm package link
- `GITHUB_REPO_URL` - GitHub repository link

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

**Note:** Design tokens are primarily for **internal use** by the library. The colors/sizes/spacing exports exist mainly for the documentation site and edge cases. Users should rely on the `variant` and `size` props rather than importing tokens directly.

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

### Color Management

**Philosophy:** Pixel UI is a "plug and play" library. Users apply colors through the `variant` prop, NOT by using color utility classes or customization.

**Color Categories:**

1. **Semantic Colors** (User-facing via `variant` prop):

   - `base` - Adapts between black/white for light/dark mode
   - `primary` - Main brand color (#3337FE blue)
   - `secondary` - Alternative accent (#F15BFE pink)
   - `accent` - Highlight color (#51DF21 green)
   - `ghost` - Transparent variant
   - `error` - Error states (#FE7269 red)
   - `success` - Success states (#51DF21 green)
   - `warning` - Warning states (#ADB600 yellow)

2. **Internal Colors** (Used only in component styles):
   - `nesRed` (#FE5EC4) - Dark mode error text/borders
   - `nesBlueDark` (#00237C) - Primary button hover state
   - `nesGreenDark` (#093E00) - Accent/success button hover states
   - Plus base colors: `nesBlack`, `nesGrayDark`, `nesGray`, `nesWhite`

**Rules:**

- ❌ **Don't add colors** unless they serve a specific variant or internal styling purpose
- ❌ **Don't export unused colors** - if it's not used in components, remove it
- ✅ **Keep tokens.ts and theme.css in sync** - both define the same colors
- ✅ **Run `pnpm build:lib`** after any color changes to regenerate `components.css`
- ✅ **Use variant prop in docs** - show users how to use variants, not custom colors

**Example - Adding a new variant color:**

If you need to add a new variant (e.g., "info"), you must:

1. Add color to `tokens.ts`: `nesInfo: '#...'`
2. Add to `theme.css`: `--color-nes-info: #...`
3. Add to `Variant` type in `tokens.ts`: `'info'`
4. Add to component styles (e.g., `Button.styles.ts`): `info: 'bg-nes-info ...'`
5. Rebuild library: `pnpm build:lib`
6. Document in colors.mdx and component docs

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

**Styling Philosophy:**

- ✅ **Use `variant` prop** for color variations (primary, secondary, error, etc.)
- ✅ **Use `size` prop** for size variations (xs, sm, md, lg, xl)
- ✅ **Support `className` prop** for layout/spacing overrides only (margin, width, etc.)
- ❌ **Don't encourage color customization via className** - users should use variants
- 📝 **In documentation**: Show variant/size examples

### Type Safety

- All components use TypeScript with strict mode
- Variant and Size types are centralized in `src/styles/tokens.ts`
- Props interfaces should extend `PixelComponentBaseProps` or include standard props (variant, size, disabled, className)

### Documentation Site

- Built with Next.js 15 and Fumadocs
- MDX content in `apps/www/content/docs/`
- Automatically imports and showcases components from `@joacod/pixel-ui`
- Run with `pnpm dev` from root
