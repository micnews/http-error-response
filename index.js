var http = require('http');

module.exports = function respond(req, res, err){
  var status = err.status || 500;
  res.statusCode = status;

  var msg;
  
  if (process.env.NODE_ENV == 'production') {
    msg = http.STATUS_CODES[status]
  } else {
    msg = err.stack;
    if (/(ht|x)ml/.test(req.headers.Accept)) {
      msg = '<pre>' + msg + '</pre>';
    }
  }

  res.end(msg);
};
