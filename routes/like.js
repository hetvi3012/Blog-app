const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/posts/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.likes += 1;
    await post.save();
    res.json({ success: true, likes: post.likes });
  } catch (err) {
    console.error('Error liking post:', err.message);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
