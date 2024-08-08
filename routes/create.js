const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Serve the create post form
router.get('/create', (req, res) => {
  res.render('create', { title: 'Create Post' });
});

// Create a new post
router.post('/create', async (req, res) => {
  const { title, content, category, tags } = req.body;

  try {
    const newPost = new Post({ title, content, category, tags: tags.split(',') });
    await newPost.save();
    req.flash('success_msg', 'Post created successfully');
    res.redirect('/');
  } catch (err) {
    console.error('Error creating post:', err.message);
    req.flash('error_msg', 'Error creating post');
    res.redirect('/create');
  }
});

module.exports = router;
