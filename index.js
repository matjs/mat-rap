const rapAPIPrefixMap = {
  1: 'rap.alibaba-inc.com/mockjsdata/',
  2: 'rap2api.alibaba-inc.com/app/mock/'
}

function rap(opts) {
  return function* rap(next) {
    let rapVersion = opts.rapVersion || '1' //默认用rap1
    let rapAPIPrefix = rapAPIPrefixMap[rapVersion]

    //rap2
    if (rapVersion == '2') {
      this.protocolAlias = 'https'
      this.proxyPass = `${rapAPIPrefix + opts.projectId}/${this.request.method}`
      this.request.methodOrigin = this.request.method
      this.request.method = 'GET'
      this.isChangeOrigin = true //https需要设置header.host
    } else {
      //rap1
      this.proxyPass = rapAPIPrefix + opts.projectId
    }

    yield next
  }
}

module.exports = rap









