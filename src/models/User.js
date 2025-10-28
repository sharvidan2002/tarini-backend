const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 100,
  },
  demographics: {
    maritalStatus: String,
    sleepHours: String,
    sleepPattern: String,
    chronicIllness: String,
    mentalHealthIssues: String,
  },
  occupational: {
    qualification: String,
    teachingExperience: String,
    classSize: String,
    yearsInCurrentSchool: String,
    teachesOtherSubjects: Boolean,
  },
  isFirstTime: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('User', userSchema);