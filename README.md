# jack-http-cors
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

This Jack-Stack Plugin allows you to define source URLs that have CORS authority
to make requests to your application


## Config
The only configuration this plugin requires is `whitelist`, which is an array of
URL roots (defaults shown):

```js
jack.add(require('jack-http-cors').configure({
  whitelist: [
    'http://localhost:3000',
    'http://localhost:5000',
  ]
}));
```

[npm-image]: https://img.shields.io/npm/v/jack-http-cors.svg
[npm-url]: https://www.npmjs.org/package/jack-http-cors
[downloads-image]: https://img.shields.io/npm/dm/jack-http-cors.svg
[downloads-url]: https://www.npmjs.org/package/jack-http-cors
