const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
     type: String, 
     required: true
 },
  author: String,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, { 
    timestamps: true 
  });

module.exports = mongoose.model('Book', bookSchema);
