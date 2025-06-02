const express = require('express');
const router = express.Router();
const postsRoutes = require('./posts.router');

router.use('/', postsRoutes)

module.exports = router;
