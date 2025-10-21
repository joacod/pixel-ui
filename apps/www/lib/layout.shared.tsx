import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { Github, Package } from 'lucide-react'
import { LIBRARY_VERSION, NPM_PACKAGE_URL, GITHUB_REPO_URL } from './config'

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
        text: `v${LIBRARY_VERSION}`,
        url: NPM_PACKAGE_URL,
        external: true,
      },
      {
        icon: <Github />,
        text: 'GitHub',
        url: GITHUB_REPO_URL,
        external: true,
      },
    ],
  }
}
