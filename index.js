var path     = require('path');
var thunkify = require('thunkify');
var fetch    = require('./lib/fetch');

function rap(opts) {
  opts = opts || {};

  return function *rap(next) {
    if (/\.json$/.test(this.path)) {
      opts.path = this.path;
      opts.query = this.query;
      opts.method = this.method;
      
      var data = yield thunkify(fetch)(opts);
      
      this.body = data;

      return;
    }
    yield next;
  };
}

module.exports = rap;