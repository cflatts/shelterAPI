const mongoose = require('mongoose')

// ----------------------
// SHELTERS
// ----------------------

const shelterSchema = new mongoose.Schema({
  county: {type: String},
  name: {type: String},
  address: {type: String, required: true},
  city: {type: String},
  pets: {type: Boolean},
  phone: {type: String},
  accepting: {type: Boolean},
  last_updated: {type: Date},
  notes: {type: String},
  longitude: {type: Number},
  latitude: {type: Number},
  createdAt: {type: Date, default: Date.now}
})

module.exports = {
  Shelter: mongoose.model('Shelter', shelterSchema)
}
