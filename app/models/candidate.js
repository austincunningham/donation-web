/**
 * Created by austin on 05/11/2016.
 */
'use strict';

const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  office: String,
});

const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;