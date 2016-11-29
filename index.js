/**
 * Created by austin on 27/09/2016.
 */
'use strict';

const Hapi = require('hapi');
const corsHeaders = require('hapi-cors-headers');
/* self signed cert
const fs = require('fs');

if (process.env.NODE_ENV === 'production') {
  var options = {
    port: process.env.PORT || 4443, //any port will do
    tls: {
      key: fs.readFileSync('private/webserver.key'),
      cert: fs.readFileSync('private/webserver.crt')
    }
  };
} else {
  var options = { port: process.env.PORT || 4000 }
};
*/

var server = new Hapi.Server();
server.connection({ port: process.env.PORT || 4000 });
//server.connection(options);

/*server.bind({
  //currentUser: {},
  users: {},
  donations: [],
});*/

require('./app/models/db');

server.register([require('inert'), require('vision'), require('hapi-auth-cookie')], err => {

  if (err) {
    throw err;
  }

  server.views({
    engines: {
      hbs: require('handlebars'),
    },
    relativeTo: __dirname,
    path: './app/views',
    layoutPath: './app/views/layout',
    partialsPath: './app/views/partials',
    layout: true,
    isCached: false,
  });

  server.auth.strategy('standard', 'cookie', {
    password: 'secretpasswordnotrevealedtoanyone',
    cookie: 'donation-cookie',
    isSecure: false,
    ttl: 24 * 60 * 60 * 1000,
    redirectTo: '/login',
  });

  server.auth.default({
    strategy: 'standard',
  });

  server.ext('onPreResponse', corsHeaders);
  server.route(require('./routes'));
  server.route(require('./routesapi'));
  server.start((err) => {
    if (err) {
      throw err;
    }

    console.log('Server listening at:', server.info.uri);
  });

});

