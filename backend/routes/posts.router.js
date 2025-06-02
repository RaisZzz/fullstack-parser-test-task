const express = require('express');
const PostsController = require("../controllers/posts.controller");
const router = express.Router();

const postsController = new PostsController();

router.get('/parse', postsController.getParsedPosts);
router.post('/parse', postsController.parseNewPosts);

module.exports = router;