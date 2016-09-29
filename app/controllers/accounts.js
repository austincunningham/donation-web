/**
 * Created by austin on 27/09/2016.
 */
'use strict';

exports.main = {

  handler: function (request, reply) {
    reply.view('main', { title: 'Welcome to Donations' });
  },

};

exports.signup = {

  handler: function (request, reply) {
    reply.view('signup', {
      title: 'Sign up for Donations',
      accounts: this.users,
    });
  },

};

exports.login = {

  handler: function (request, reply) {
    reply.view('login', {
      title: 'Login to Donations',
    });
  },

};

exports.authenticate = {

  handler: function (request, reply) {
    this.currentUser = request.payload;
    for (let i=0; i< this.users.length ; i++) {
      if ((this.users[i].email == this.currentUser.email) && (this.users[i].password == this.currentUser.password)) {
        console.log('true');
        reply.redirect('/home');
      } else {
        console.log('false try again');
        //reply.redirect('/');
      }
    }

  }

};

exports.logout = {

  handler: function (request, reply) {
    reply.redirect('/');
  },

};

exports.register = {

  handler: function (request, reply) {
    const data = request.payload;
    this.users.push(data);
    reply.redirect('/login');
  },

};
