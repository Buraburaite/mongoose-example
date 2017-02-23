const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CatSchema = Schema({
  name     : { type: String, default: "Garfield" },
  color    : { type: String, default: "Orange" },
  age      : { type: Number, min: 0, max: 30 },
  toys     : [String], // Array of strings
  vetVisits: [Date],   // Array of Dates
  owners   : [Schema.Types.ObjectId] // Array of Object IDs
});

const Cat = mongoose.model('Cat', CatSchema);
