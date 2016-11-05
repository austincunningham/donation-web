/**
 * Created by austin on 05/11/2016.
 */
const CandidatesApi = require('./app/api/candidatesapi');

module.exports = [
  { method: 'GET', path: '/api/candidates', config: CandidatesApi.find },
  { method: 'GET', path: '/api/candidates/{id}', config: CandidatesApi.findOne },
];