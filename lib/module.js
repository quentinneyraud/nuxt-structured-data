import { resolve } from 'path'

module.exports = function () {
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-structured-data.js'
  })
}

module.exports.meta = require('../package.json')
