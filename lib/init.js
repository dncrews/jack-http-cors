
var jack = require('jack-stack')
  , cors = require('cors');

module.exports = function() {
  var config = this.config;
  jack.useBefore('config', 'config:cors', function(data) {
    var origins = config.whitelist
      , app = data.app;

    app.use(cors({
      origin: function(origin, callback) {
        callback(null, origins.indexOf(origin) !== -1);
      },

      credentials: true,
    }));
  });
};
