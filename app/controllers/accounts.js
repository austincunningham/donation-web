/**
 * Created by austin on 27/09/2016.
 */
'use strict';

exports.main = {
  auth: false,
  handler: function (request, reply) {
    reply.view('main', { title: 'Welcome to Donations' });
  },

};

exports.signup = {
  auth: false,
  handler: function (request, reply) {
    reply.view('signup', {
      title: 'Sign up for Donations',
      accounts: this.users,
    });
  },

};

exports.login = {
  auth: false,
  handler: function (request, reply) {
    reply.view('login', {
      title: 'Login to Donations',
    });
  },

};

exports.authenticate = {

  handler: function (request, reply) {
    const user = request.payload;
    if ((user.email in this.users) && (user.password === this.users[user.email].password)) {
      this.currentUser = this.users[user.email];
      reply.redirect('/home');
    } else {
      reply.redirect('/signup');
    }
  },

};

exports.logout = {

  handler: function (request, reply) {
    reply.redirect('/');
  },

};

exports.register = {

  handler: function (request, reply) {
    const user = request.payload;
    this.users[user.email] = user;
    reply.redirect('/login');
  },

};
