
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./rice-doge.cjs.production.min.js')
} else {
  module.exports = require('./rice-doge.cjs.development.js')
}
