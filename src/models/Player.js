const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  skillRank: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('Player', playerSchema);