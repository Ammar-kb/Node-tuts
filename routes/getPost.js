const express = require('express');
const post = require('../controllers/post');
const router = express.Router();
const helpers = require('../helpers/index')
router.get('/',post.getPost);
router.post('/post',post.createPost);

module.exports = router;
