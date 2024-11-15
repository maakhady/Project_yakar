const mongoose = require('mongoose');

const schemaUtilisateur = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    unique: true
  },
  prenom: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mot_passe: {
    type: String,
    required: true
  },
  code_secret: {
    type: Number,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ['administrateur', 'utilisateur'],
    default: 'utilisateur'
  }

});


module.exports = mongoose.model('Utilisateur', schemaUtilisateur);