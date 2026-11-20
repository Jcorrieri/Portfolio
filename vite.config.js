import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const rootDir = dirname(fileURLToPath(import.meta.url))

function copyDocuments() {
  return {
    name: 'copy-portfolio-documents',
    closeBundle() {
      const outputDir = resolve(rootDir, 'dist', 'media')
      mkdirSync(outputDir, { recursive: true })

      for (const file of ['Corrieri_Jacomo_Resume.pdf', 'MARCC_Final.pdf']) {
        copyFileSync(resolve(rootDir, 'media', file), resolve(outputDir, file))
      }
    },
  }
}

export default defineConfig({
  plugins: [copyDocuments()],
})
