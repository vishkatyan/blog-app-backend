const express = require('express');
const router = express.Router();

//importing the controller
const {createPosts, getPosts} = require('../controllers/post');
const {createComment, getComments} = require('../controllers/comments');

//define the api routes
router.post("/posts/create", createPosts);
router.get("/posts", getPosts);
router.post("/comments/create" , createComment);
router.get("/comments" , getComments);

module.exports = router;