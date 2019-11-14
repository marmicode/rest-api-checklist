const path = require('path');

module.exports = function (req, res, next) {
  
  /* If url has no extension then it's a route so just get index.html by rewriting url to '/'. */
  if (['GET', 'HEAD'].includes(req.method) && path.extname(req.url) === '') {
    req.url = '/';
  }

  next();

}