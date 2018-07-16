var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  middleName: {
    type: String,
    trim:true
  },
  lastName: {
    type: String,
    trim: true
  },

  email: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  subject: {
    type: String,
    required: true,
    trim:true
  },
  message: {
    type: String,
    required: true,
    trim:true
  }

});

module.exports = mongoose.model('user', UserSchema);
