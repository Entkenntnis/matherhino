const fs = require('fs')
const { PNG } = require('pngjs')

const exercises = fs.readdirSync('./src/data')
const regex = /\{ src: '([^']+)'(?: |, offset: ([\d]+) )}/g;

for (const exercise of exercises) {
  if (/^exercise[\d]+\.ts$/.test(exercise)) {
    const file = './src/data/' + exercise
    const code = fs.readFileSync(file, 'utf-8')
    const newCode = code.replace(regex, (match, src, offset) => {
      console.log({ src, offset })
      
      // read png, crop, and adjust offset
      const data = fs.readFileSync('./public' + src)
      const png = PNG.sync.read(data)
      
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
      
      const newHeight = png.height - cropTop * 47 - cropBottom
      const dst = new PNG({ width: png.width, height: newHeight })
      PNG.bitblt(png, dst, 0, cropTop * 47, png.width, newHeight, 0, 0)
      
      const outputBuffer = PNG.sync.write(dst)
      
      fs.writeFileSync('./public' + src, outputBuffer)
      
      const newOffset = parseInt(offset || '0') + cropTop
      
      const replacement = `{ src: '${src}'${newOffset ? `, offset: ${newOffset} ` : ' '}}`
      console.log(replacement)
      return replacement
    })
    if (newCode !== code) {
      console.log('writing file ' + file)
      fs.writeFileSync(file, newCode)
    }
  }
}
