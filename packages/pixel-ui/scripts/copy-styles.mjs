import { copyFile, mkdir, readdir, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const srcStylesDir = new URL('../src/styles/', import.meta.url)
const distStylesDir = new URL('../dist/styles/', import.meta.url)

async function copyStyles() {
  // Copy CSS files
  await rm(distStylesDir, { recursive: true, force: true })
  await mkdir(distStylesDir, { recursive: true })

  const entries = await readdir(srcStylesDir)

  await Promise.all(
    entries
      .filter((file) => file.endsWith('.css') && !file.includes('-temp'))
      .map((file) =>
        copyFile(
          fileURLToPath(new URL(file, srcStylesDir)),
          fileURLToPath(new URL(file, distStylesDir))
        )
      )
  )
}

copyStyles().catch((error) => {
  console.error('Failed to copy styles', error)
  process.exitCode = 1
})
