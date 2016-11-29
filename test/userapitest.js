/**
 * Created by austin on 05/11/2016.
 */
'use strict';

const assert = require('chai').assert;
const DonationService = require('./donation-service');
const fixtures = require('./fixtures.json');
const _ = require('lodash');

suite('User API test', function(){

  let users = fixtures.users;
  let newUser = fixtures.newUser;

  const donationServices = new DonationService('https://localhost:4000');

  beforeEach(function (){
    donationServices.deleteAllUsers();
  });
  afterEach(function(){
    donationServices.deleteAllUsers();
  });

  test('create a user', function(){
    const returnedUser = donationServices.createUser(newUser);
    assert(_.some([returnedUser], newUser), 'returnedUser must be a subset of newUser');
    assert.isDefined(returnedUser._id);
  });

  test('get user', function(){
    const c1 = donationServices.createUser(newUser);
    const c2 = donationServices.getUser(c1._id);
    assert.deepEqual(c1, c2);
  });

  test('get invalid user', function(){
    const c1 = donationServices.getUser('1234');
    assert.isNull(c1);
    const c2 = donationServices.getUser('012345678901234567890123');//making sure mongoose api doesn't return positive for correct key length
    assert.isNull(c2);
  });

  test('delete a user', function () {
    const c = donationServices.createUser(newUser);
    assert(donationServices.getUser(c._id) != null);
    donationServices.deleteOneUser(c._id);
    assert(donationServices.getUser(c._id) == null);
  });

  test('get all users', function () {
    for (let c of users) {
      donationServices.createUser(c);
    }

    const allUsers = donationServices.getUsers();
    assert.equal(allUsers.length, users.length);
  });

  test('get users detail', function () {
    for (let c of users) {
      donationServices.createUser(c);
    }

    const allUsers = donationServices.getUsers();
    for (var i = 0; i < users.length; i++) {
      assert(_.some([allUsers[i]], users[i]), 'returnedUser must be a superset of newUser');
    }
  });

  test('get all users empty', function () {
    const allUsers = donationServices.getUsers();
    assert.equal(allUsers.length, 0);
  });

});