var request = require('request');
var rapAPI  = 'http://rap.alibaba-inc.com/mockjsdata/';

module.exports = function fatch(opts, callback) {
  var requestOptions = {
    url: rapAPI + opts.projectId + opts.path,
    method: opts.method,
    timeout: 10*1000
  }

  /**
   * 对于获取tms的接口做特殊处理
   */
  for (var i in opts.query) {
    if(/^\/rgn.*\.(php|html)$/.test(opts.query[i])){
      requestOptions.url += opts.query[i];
      break;
    }
  }

  request(requestOptions, function (err, response, body) {
    if (err) {
      callback(err);
    } else if(response.statusCode == 200) {
      callback (null, body);
    }
  });
}