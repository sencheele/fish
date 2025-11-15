import fs from 'fs'
import path from 'path'

const iconsDirectory = path.resolve('src/assets/icons')
const outputFile = path.resolve('public/sprite.svg')

let symbols = ''

fs.readdirSync(iconsDirectory).forEach(file => {
  if (file.endsWith('.svg')) {
    const svgContent = fs.readFileSync(path.join(iconsDirectory, file), 'utf-8')
    const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/)
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24'

    const symbolContent = svgContent
      .replace(/<\?xml.*?\?>/, "")
      .replace(/<!DOCTYPE.*?>/, "")
      .replace(/<svg[^>]*>/, "")
      .replace(/<\/svg>/, "")
      .trim()

    const id = path.basename(file, '.svg')

    symbols += `<symbol id="${id}" viewBox="${viewBox}">${symbolContent}</symbol>\n`
  }
})

const sprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n${symbols}</svg>\n`

fs.writeFileSync(outputFile, sprite, 'utf-8')
