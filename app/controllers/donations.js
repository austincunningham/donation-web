/**
 * Created by austin on 27/09/2016.
 */
'use strict';

exports.home = {

  handler: (request, reply) => {
    reply.file('./app/views/main.html');
  },
};
exports.signup = {

  handler: (request, reply) => {
    reply.file('./app/views/signup.html');
  },

};

exports.login = {

  handler: (request, reply) => {
    reply.file('./app/views/login.html');
  },

};

