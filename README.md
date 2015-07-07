# jack-http-cors
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
