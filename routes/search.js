const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Search posts
router.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
    const posts = await Post.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { content: { $regex: query, $options: 'i' } },
        { tags: { $regex: query, $options: 'i' } },
      ]
    });
    res.render('search', { title: 'Search Results', posts, query });
  } catch (err) {
    console.error('Error searching posts:', err.message);
    req.flash('error_msg', 'Error searching posts');
    res.redirect('/');
  }
});

module.exports = router;
