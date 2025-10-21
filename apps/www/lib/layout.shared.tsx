import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { Github, Package } from 'lucide-react'

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <span style={{ fontSize: '24px', lineHeight: 1 }}>👾</span> Pixel UI
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        icon: <Package />,
        text: 'v0.12.1',
        url: 'https://www.npmjs.com/package/@joacod/pixel-ui',
        external: true,
      },
      {
        icon: <Github />,
        text: 'GitHub',
        url: 'https://github.com/joacod/pixel-ui',
        external: true,
      },
    ],
  }
}
