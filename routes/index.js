const express = require('express');
const router = express.Router();
const posts = require('../data'); // Import the posts array

router.get('/', (req, res) => {
  res.render('index', { posts });
});

module.exports = router;
