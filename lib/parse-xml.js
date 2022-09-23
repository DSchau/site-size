const { XMLParser } = require('fast-xml-parser')

let parser

module.exports = async function parseXml(xml) {
  if (!parser) {
    parser = new XMLParser()
  }

  return parser.parse(xml)
}
