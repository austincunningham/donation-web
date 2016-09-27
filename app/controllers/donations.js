/**
 * Created by austin on 27/09/2016.
 */
'use strict';

exports.home = {

  handler: (request, reply) => {
    reply.file('./app/views/main.html');
  },

};