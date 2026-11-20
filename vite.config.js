import { cpSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const rootDir = dirname(fileURLToPath(import.meta.url))

function copyMedia() {
  return {
    name: 'copy-portfolio-media',
    closeBundle() {
      cpSync(resolve(rootDir, 'media'), resolve(rootDir, 'dist', 'media'), {
        recursive: true,
      })
    },
  }
}

export default defineConfig({
  base: '/Portfolio/',
  plugins: [copyMedia()],
})
