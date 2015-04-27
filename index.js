var rapAPIPrefix = 'rap.alibaba-inc.com/mockjsdata/'

function rap(opts) {
  opts = opts || {}

  return function *rap(next) {
    if (/\.json$/.test(this.path)) {
      this.url = this.url.replace(this.host, rapAPIPrefix + opts.projectId)
    }

    yield next
  }
}

module.exports = rap