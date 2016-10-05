/**
 * Created by austin on 05/10/2016.
 */
const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
  amount: Number,
  method: String,
  donor: String,
});

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;