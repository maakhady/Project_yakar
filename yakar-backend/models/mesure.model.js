const mongoose = require('mongoose');

const schemaMesure = new mongoose.Schema({
  temperature: {
    type: Number,
    required: true
  },
  humidite: {
    type: Number,
    required: true
  },
  horodatage: {
    type: Date,
    required: true,
    default: Date.now
  },
  heurePrevue: {
    type: String,
    enum: ['10:00', '14:00', '17:00']
  }
});


module.exports = mongoose.model('Mesure', schemaMesure);