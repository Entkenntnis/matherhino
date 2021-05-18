const fs = require('fs')
const { PNG } = require('pngjs')

const fileRegex = /^exercise[\d]+\.ts$/
const layerRegex = /\{ src: '([^']+)'(?: |, offset: ([\d]+) )}/g

const exercises = fs.readdirSync('./src/data')

const contentFolders = fs.readdirSync('./public/content')

for (const contentFolder of contentFolders) {
  const path = `./public/content/${contentFolder}/Hintergrund.PNG`
  if (fs.existsSync(path)) {
    console.log('delete background image', path)
    fs.unlinkSync(path)
  }
}

for (const exercise of exercises) {
  if (fileRegex.test(exercise)) {
    const file = './src/data/' + exercise
    console.log(file)
    const code = fs.readFileSync(file, 'utf-8')
    const newCode = code.replace(layerRegex, (match, src, offset) => {
      offset = parseInt(offset)
      console.log({ src, offset })

      // read png, crop, and adjust offset
      const data = fs.readFileSync('./public' + src)
      const png = PNG.sync.read(data)

      if (png.height == 5573) {
        // re-export
        console.log('re-export')
        offset = 0
      }

      const offsetInFileName = /s([\d]+).PNG/gm.exec(src)

      if (offsetInFileName && offset == 0) {
        offset += parseInt(offsetInFileName[1])
      }

      let cropTop = 0
      while (cropTop * 47 < png.height) {
        const rangeStart = cropTop * 47 * png.width * 4
        const rangeEnd = (cropTop + 1) * 47 * png.width * 4
        let sum = 0
        for (let i = rangeStart; i < rangeEnd; i++) {
          sum += png.data[i]
        }
        if (sum > 0) break
        cropTop++
      }
      let cropBottom = 0
      while (cropBottom < png.height) {
        const rangeStart = (png.height - cropBottom - 1) * png.width * 4
        const rangeEnd = (png.height - cropBottom) * png.width * 4
        let sum = 0
        for (let i = rangeStart; i < rangeEnd; i++) {
          sum += png.data[i]
        }
        if (sum > 0) break
        cropBottom++
      }

      if (cropTop > 0 || cropBottom > 0) {
        console.log({ cropTop, cropBottom })
        const newHeight = png.height - cropTop * 47 - cropBottom
        const dst = new PNG({ width: png.width, height: newHeight })
        PNG.bitblt(png, dst, 0, cropTop * 47, png.width, newHeight, 0, 0)
        const outputBuffer = PNG.sync.write(dst)
        fs.writeFileSync('./public' + src, outputBuffer)
      } else {
        console.log('Alles ok')
      }

      console.log({ cropTop })
      const newOffset = offset + cropTop
      const replacement = `{ src: '${src}'${
        newOffset ? `, offset: ${newOffset} ` : ' '
      }}`
      console.log(replacement)
      console.log()
      console.log()
      return replacement
    })
    if (newCode !== code) {
      console.log('writing file ' + file)
      fs.writeFileSync(file, newCode)
    }
  }
}
