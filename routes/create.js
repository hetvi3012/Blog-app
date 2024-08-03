const express = require('express');
const router = express.Router();
const posts = require('../data'); // Import the posts array

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', (req, res) => {
  const newPost = {
    id: Date.now().toString(),
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.redirect('/');
});

module.exports = router;
