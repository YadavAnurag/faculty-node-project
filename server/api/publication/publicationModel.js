var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var publicationSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  author: {
    type: String,
    trim: true,
    required: true
  },
  about: {
    type: String,
    trim: true,
    required: true
  }
});

module.exports = mongoose.model('publication', publicationSchema);
