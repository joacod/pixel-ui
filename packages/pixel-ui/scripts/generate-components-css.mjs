import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { join, dirname } from 'node:path'
import { exec } from 'node:child_process'
import { promisify } from 'node:util'

const execAsync = promisify(exec)

const componentsDir = new URL('../src/components/', import.meta.url)
const stylesDir = new URL('../src/styles/', import.meta.url)
const componentsCssPath = fileURLToPath(new URL('components.css', stylesDir))
const tempInputPath = fileURLToPath(new URL('components-temp.css', stylesDir))
const tempHtmlPath = fileURLToPath(new URL('components-temp.html', stylesDir))

/**
 * Recursively finds all .styles.ts files in the components directory
 */
async function findStyleFiles(dir) {
  const files = []
  const entries = await readdir(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await findStyleFiles(fullPath)))
    } else if (entry.name.endsWith('.styles.ts')) {
      files.push(fullPath)
    }
  }

  return files
}

/**
 * Extracts Tailwind classes from a .styles.ts file
 * Handles both array and string formats
 */
function extractClasses(content) {
  const classes = new Set()

  // Match string literals in arrays: ['class1', 'class2']
  const arrayMatches = content.matchAll(/['"`]([\w\-:\/\[\]\(\)\.]+)['"`]/g)
  for (const match of arrayMatches) {
    const className = match[1]
    // Filter out non-Tailwind patterns (imports, exports, etc)
    if (
      !className.includes('/') &&
      !className.includes('export') &&
      !className.includes('import') &&
      className.length > 1
    ) {
      classes.add(className)
    }
  }

  // Also match arbitrary values like shadow-[2px_2px_0_0_theme(colors.nes.black)]
  const arbitraryMatches = content.matchAll(/['"`]([\w\-:]+\[[^\]]+\])['"`]/g)
  for (const match of arbitraryMatches) {
    classes.add(match[1])
  }

  return Array.from(classes)
}

/**
 * Generates a temporary CSS and HTML file containing all component classes
 */
async function generateTempCss() {
  console.log('🔍 Finding component style files...')
  const styleFiles = await findStyleFiles(fileURLToPath(componentsDir))
  console.log(`Found ${styleFiles.length} style files`)

  const allClasses = new Set()

  for (const file of styleFiles) {
    console.log(`  Processing ${file.split('/').pop()}`)
    const content = await readFile(file, 'utf-8')
    const classes = extractClasses(content)
    classes.forEach((cls) => allClasses.add(cls))
  }

  console.log(`📦 Extracted ${allClasses.size} unique Tailwind classes`)

  // Create temp HTML file with all classes
  // Tailwind will scan this file when processing the CSS
  const classString = Array.from(allClasses).join(' ')
  const tempHtml = `<!DOCTYPE html>
<html>
<head><title>Pixel UI Component Classes</title></head>
<body>
  <!-- Auto-generated: All component classes for Tailwind scanning -->
  <div class="${classString}"></div>
</body>
</html>
`

  // Create temp CSS that includes everything: font, theme, tailwind, base, and component classes
  // This creates a single all-in-one CSS file for consumers
  const tempCss = `
@import './theme.css';
@import 'tailwindcss';
@import './base.css';
@source './components-temp.html';

/* Auto-generated: Complete Pixel UI styles (theme + base + components) */
`

  await writeFile(tempHtmlPath, tempHtml, 'utf-8')
  await writeFile(tempInputPath, tempCss, 'utf-8')
  console.log('✅ Created temporary CSS and HTML files')
}

/**
 * Processes the temp CSS with Tailwind to generate final components.css
 */
async function processCss() {
  console.log('⚙️  Processing CSS with Tailwind...')

  try {
    // Use PostCSS with Tailwind plugin to process the temp file
    const { stdout, stderr } = await execAsync(
      `pnpm exec postcss ${tempInputPath} -o ${componentsCssPath} --no-map`,
      {
        cwd: fileURLToPath(new URL('../', import.meta.url)),
      }
    )

    if (stderr) {
      console.warn('⚠️  PostCSS output:', stderr)
    }

    console.log('✅ Generated components.css')
  } catch (error) {
    console.error('❌ Failed to process CSS:', error.message)
    throw error
  }
}

/**
 * Main function to generate components CSS
 */
async function generateComponentsCss() {
  try {
    console.log('🎨 Generating Pixel UI component styles...\n')

    await generateTempCss()
    await processCss()

    // Clean up temporary files
    console.log('🧹 Cleaning up temporary files...')
    await rm(tempInputPath, { force: true })
    await rm(tempHtmlPath, { force: true })
    console.log('✅ Temporary files removed')

    console.log('\n✨ Component CSS generation complete!\n')
  } catch (error) {
    console.error('Failed to generate components CSS:', error)
    process.exitCode = 1
  }
}

generateComponentsCss()
