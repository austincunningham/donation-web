'use strict';

exports.home = {

  handler: function (request, reply) {
    reply.view('home', { title: 'Make a Donation' });
  },

};

exports.report = {

  handler: function (request, reply) {
    reply.view('report', {
      title: 'Donations to Date',
      donations: this.donations,
      user: this.currentUser,
    });
  },

};

exports.donate = {

  handler: function (request, reply) {
    const data = request.payload;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email == this.currentUser.email) {
        const user = '';
        data.user =  this.users[i].firstName +' '+ this.users[i].lastName;

        }
      }
      this.donations.push(data);
      reply.redirect('/report');
    }

  };


