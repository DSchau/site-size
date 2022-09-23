const fs = require('fs/promises')
const parser = require('./')

async function main() {
  const file = await fs.readFile('./bayer.xml', 'utf8')

  const parsed = await parser({
    file
  })

  console.log(parsed.size)
}

main()


