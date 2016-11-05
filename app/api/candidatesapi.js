/**
 * Created by austin on 05/11/2016.
 */
'use strict';

const Candidate = require('../models/candidate');
const Boom = require('boom');

exports.find = {

  auth: false,

  handler: function (request, reply) {
    Candidate.find({}).exec().then(candidates => {
      reply(candidates);
    }).catch(err => {
      reply(Boom.badImplementation('error accessing db'));
    });
  },

};