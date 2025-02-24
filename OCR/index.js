import * as Tesseract from 'tesseract.js'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const imagePath = join(__dirname, 'image.jpg')

const result = await Tesseract.default.recognize(imagePath, 'chi_sim', {
	logger: info => console.log(info),
})

console.log(result.data.text)
