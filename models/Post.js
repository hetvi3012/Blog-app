const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String },
  tags: [String],
  date: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 } // Add likes field
});

module.exports = mongoose.model('Post', PostSchema);
