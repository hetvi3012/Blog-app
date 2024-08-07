const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Display the form for editing a post
router.get('/edit/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.render('edit', { post });
  } catch (err) {
    console.error('Error retrieving post:', err.message);
    res.status(500).send('Server Error');
  }
});

// Handle the form submission to edit a post
router.post('/edit/:id', async (req, res) => {
  const { title, content, category, tags } = req.body;
  try {
    await Post.findByIdAndUpdate(req.params.id, {
      title,
      content,
      category,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : []
    });
    res.redirect('/');
  } catch (err) {
    console.error('Error updating post:', err.message);
    res.status(500).send('Server Error');
  }
});

// Handle deleting a post
router.post('/delete/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    console.error('Error deleting post:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
