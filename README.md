swaggerize-defaulthandler
==================

This is a direct fork of [swaggerize-routes](https://github.com/krakenjs/swaggerize-routes) with the difference that you can use a defaulthandler like the following example:

```javascript
var builder = require('swaggerize-routes');

var routes = builder({
    api: require('./api.json'),
    defaulthandler: function (req, reply) {
       reply.('something');
    },
    security: './security' //Optional - security authorize handlers as per `securityDefinitions`
});
```