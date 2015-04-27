var path         = require('path')
var rapAPIPrefix = 'rap.alibaba-inc.com/mockjsdata/'

function rap(opts) {
  opts = opts || {}
  opts.ext = opts.ext || ['.json']
  opts.match = opts.match || function () {return true}

  return function *rap(next) {
    var extname = path.extname(this.path)
    
    if (~opts.ext.indexOf(extname) && opts.match.call(this)) {
      this.url = this.url.replace(this.host, rapAPIPrefix + opts.projectId)
    }

    yield next
  }
}

module.exports = rap