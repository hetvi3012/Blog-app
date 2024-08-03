const express = require('express');
const router = express.Router();
const posts = require('../data'); // Import the posts array

router.get('/edit/:id', (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  res.render('edit', { post });
});

router.post('/edit/:id', (req, res) => {
  const postIndex = posts.findIndex(p => p.id === req.params.id);
  posts[postIndex] = {
    id: req.params.id,
    title: req.body.title,
    content: req.body.content
  };
  res.redirect('/');
});

router.post('/delete/:id', (req, res) => {
  const postIndex = posts.findIndex(p => p.id === req.params.id);
  posts.splice(postIndex, 1);
  res.redirect('/');
});

module.exports = router;
