var path         = require('path')
var rapAPIPrefix = 'rap.alibaba-inc.com/mockjsdata/'

function rap(opts) {
  opts = opts || {}
  opts.ext = opts.ext || ['.json']

  return function *rap(next) {
    var extname = path.extname(this.path)

    if (~opts.ext.indexOf(extname)) {
      this.url = this.url.replace(this.host, rapAPIPrefix + opts.projectId)
    }

    yield next
  }
}

module.exports = rap