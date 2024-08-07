const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Add a comment to a post
router.post('/posts/:id/comments', async (req, res) => {
  const { content } = req.body;
  const postId = req.params.id;

  try {
    const comment = new Comment({ content, postId });
    await comment.save();
    res.redirect(`/posts/${postId}`);
  } catch (err) {
    console.error('Error adding comment:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
