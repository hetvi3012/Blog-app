const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Delete a post
router.post('/delete/:id', async (req, res) => {
  try {
    await Post.findByIdAndRemove(req.params.id);
    req.flash('success_msg', 'Post deleted successfully');
    res.redirect('/');
  } catch (err) {
    console.error('Error deleting post:', err.message);
    req.flash('error_msg', 'Error deleting post');
    res.redirect('/');
  }
});

module.exports = router;
