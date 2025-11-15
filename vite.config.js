import { defineConfig } from 'vite'
import { readdirSync } from 'fs'
import { resolve } from 'path'

const pagesDir = resolve(__dirname, 'src/pages')
const pages = readdirSync(pagesDir)
  .filter(file => file.endsWith('.html') && file !== '_sitemap.html')
  .reduce((entries, file) => {
    const name = file.replace('.html', '')
    entries[name] = resolve(pagesDir, file)
    return entries
  }, {})

export default defineConfig({
  base: './',
  server: {
    open: '/src/pages/_sitemap.html',
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        ...pages
      }
    }
  },
})
