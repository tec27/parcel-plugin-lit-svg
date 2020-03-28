const { Asset } = require('parcel-bundler')

class LitSvgAsset extends Asset {
  constructor(name, options) {
    super(name, options)
    this.type = 'js'
  }

  async parse(contents) {
    return contents
  }

  async generate() {
    return `
      const {svg} = require('lit-element')

      module.exports = svg${'`' + this.ast + '`'}
    `
  }
}
