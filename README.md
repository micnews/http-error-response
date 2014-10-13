
# http-error-response

  Standard http error handler that follows sane conventions:

  - uses `error.status` and defaults to `500`
  - when `NODE_ENV == "production"`, responds with terse status descriptions
  - in all other environments, responds with the `error.stack` and renders nicely in browsers

## Example

```js
var http = require('http');
var onerror = require('http-error-response');

var server = http.createServer(function(req, res){
  var err = new Error('oopsie');
  onerror(req, res, err);
});
```

## Installation

```bash
$ npm install http-error-response
```

## API

### onerror(req, res, err)

## License

  MIT

