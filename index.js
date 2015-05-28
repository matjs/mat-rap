var path         = require('path')
var rapAPIPrefix = 'rap.alibaba-inc.com/mockjsdata/'

function rap(opts) {
  return function *rap(next) {
    this.url = this.url.replace(this.host, rapAPIPrefix + opts.projectId)

    yield next
  }
}

module.exports = rap