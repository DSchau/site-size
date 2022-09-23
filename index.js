const { XMLParser } = require('fast-xml-parser')

module.exports = async function parser(opts = {}) {
  let parser = new XMLParser()
  let content = opts.file
  if (opts.url) {
    // TODO: add in URL handling / fetching, e.g. of a sitemap
    // then site:opts.url in google as a fallback
    content = opts.url
  }

  const parsed = await parser.parse(content)

  const urls = new Set()

  parsed.urlset.url.forEach(url => {
    urls.add(url.loc)
  })

  return urls
}
