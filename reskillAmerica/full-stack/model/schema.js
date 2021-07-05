const mongoose = require('mongoose');

const students = mongoose.Schema({
  name: { type: 'string', require: true },
  age: { type: 'Number', require: true },
  placeOfBirth: { type: 'string', require: true },
  country: { type: 'string', require: true },
});

const model = mongoose.model('student', students);

module.exports = model;
