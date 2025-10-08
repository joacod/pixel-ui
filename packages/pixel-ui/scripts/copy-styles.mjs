import { copyFile, mkdir, readdir, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const srcDir = new URL('../src/styles/', import.meta.url)
const distDir = new URL('../dist/styles/', import.meta.url)

async function copyStyles() {
  await rm(distDir, { recursive: true, force: true })
  await mkdir(distDir, { recursive: true })

  const entries = await readdir(srcDir)

  await Promise.all(
    entries
      .filter((file) => file.endsWith('.css') && !file.includes('-temp'))
      .map((file) =>
        copyFile(
          fileURLToPath(new URL(file, srcDir)),
          fileURLToPath(new URL(file, distDir))
        )
      )
  )
}

copyStyles().catch((error) => {
  console.error('Failed to copy styles', error)
  process.exitCode = 1
})
