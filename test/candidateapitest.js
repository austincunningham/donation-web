'use strict';

const assert = require('chai').assert;
const DonationService = require('./donation-service');
const fixtures = require('./fixtures.json');
const _ = require('lodash');

suite('Candidate API tests', function () {

  let candidates = fixtures.candidates;
  let newCandidate = fixtures.newCandidate;

  const donationService = new DonationService('http://localhost:4000');
   //verbose
  /*test('create a candidate', function () {
    const returnedCandidate = donationService.createCandidate(newCandidate);
    assert.equal(returnedCandidate.firstName, newCandidate.firstName);
    assert.equal(returnedCandidate.lastName, newCandidate.lastName);
    assert.equal(returnedCandidate.office, newCandidate.office);
    assert.isDefined(returnedCandidate._id);
  });*/
  //fails because id and v are not included
  /*test('create a candidate', function () {
    const returnedCandidate = donationService.createCandidate(newCandidate);
    assert.equal(returnedCandidate, newCandidate);
    assert.isDefined(returnedCandidate._id);
  });*/
  // lodash searches for a subset so doesn't return a _id or v
  test('create a candidate', function () {
    const returnedCandidate = donationService.createCandidate(newCandidate);
    assert(_.some([returnedCandidate], newCandidate),  'returnedCandidate must be a superset of newCandidate');
    assert.isDefined(returnedCandidate._id);
  });

  test('delete a candidate', function () {
    const c = donationService.createCandidate(newCandidate);
    assert(donationService.getCandidate(c._id) != null);
    donationService.deleteOneCandidate(c._id);
    assert(donationService.getCandidate(c._id) == null);
  });
});