const parseXML = require('./lib/parse-xml')

module.exports = async function parser(opts = {}) {
  let content = opts.file
  if (opts.url) {
    // TODO: add in URL handling / fetching, e.g. of a sitemap
    // then site:opts.url in google as a fallback
    content = opts.url
  }

  const parsed = await parseXML(content)

  const urls = new Set()

  parsed.urlset.url.forEach(url => {
    urls.add(url.loc)
  })

  return urls
}
