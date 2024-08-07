const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Comment = require('../models/Comment');

// Route to display all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.render('index', { posts });
  } catch (err) {
    console.error('Error retrieving posts:', err.message);
    res.status(500).send('Server Error');
  }
});

// Route to display a single post with its comments
router.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const comments = await Comment.find({ postId: req.params.id });
    res.render('post', { post, comments });
  } catch (err) {
    console.error('Error retrieving post:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
