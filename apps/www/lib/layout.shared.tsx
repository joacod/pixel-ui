import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { SiNpm } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
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
        icon: <SiNpm />,
        text: `v${LIBRARY_VERSION}`,
        url: NPM_PACKAGE_URL,
        external: true,
      },
      {
        icon: <FaGithub />,
        text: 'GitHub',
        url: GITHUB_REPO_URL,
        external: true,
      },
    ],
  }
}
