var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employmentHistoryAll =  [
  {
    designation:{
      type: String
    },
    startDate:{
      type: Date
    },
    endDate: {
      type: Date,
      default: new Date()
    }
  }
];

var aboutSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  fatherName: {
    type: String,
    trim: true
  },
  gender: {
    type: String,
    default: "Male",
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true,
    default: new Date()
  },
  correspondenceAddress: {
    type: String,
  },
  permanentAddress: {
    type: String,
    required: true
  },
  hobbies: {
    type: Array
  },
  qualities: {
    type: Array
  },
  phoneNumber: {
    type: Array
  },
  email: {
    type: Array
  },
  currentDepartment: {
    type: String,
    trim: true
  },
  currentCollege: {
    type: String,
    trim: true
  },
  designation: {
    type: Array
  },
  fieldOfSpecialization: {
    type: Array,
  },
  highestQualification: {
    type: Array,
    required: true
  },
  teachingExperianceUG: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  teachingExperiancePG: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  seminar: {
    type: Number,
    min: 0
  },
  workshop: {
    type: Number,
    min: 0
  },
  confrence: {
    type: Number,
    min: 0
  },
  achievements: {
    type: Array
  },
  employmentHistory: employmentHistoryAll,
  subjectTaught: {
    type: String,
    trim: true
  }

});


module.exports = mongoose.model("about", aboutSchema);
