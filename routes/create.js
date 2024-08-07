const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Display the form for creating a new post
router.get('/create', (req, res) => {
  res.render('create');
});

// Handle the form submission to create a new post
router.post('/create', async (req, res) => {
  const { title, content, category, tags } = req.body;
  try {
    const newPost = new Post({
      title,
      content,
      category,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : []
    });
    await newPost.save();
    res.redirect('/');
  } catch (err) {
    console.error('Error creating post:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
