const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Like a post
router.post('/posts/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    post.likes += 1;
    await post.save();
    res.json({ success: true, likes: post.likes, dislikes: post.dislikes });
  } catch (err) {
    console.error('Error liking post:', err.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Dislike a post
router.post('/posts/:id/dislike', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    post.dislikes += 1;
    await post.save();
    res.json({ success: true, likes: post.likes, dislikes: post.dislikes });
  } catch (err) {
    console.error('Error disliking post:', err.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
