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
      //if (this.users[email] === this.currentUser.email) {
        const donationUser = '';
        data.donationUser = this.currentUser;
        //data.donationUser =  this.users[user.email].firstName +' '+ this.users[user.email].lastName;

        //}
      this.donations.push(data);
      reply.redirect('/report');
    }

  };


