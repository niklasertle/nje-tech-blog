const router = require('express').Router();
const {User, Post} = require('../models');
const withAuth = require('../utils/withAuth');

//Sends the homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({include: User});
        const posts = postData.map(post => post.get({plain:true}));
        res.render('homepage', posts);
    } catch (err) {
        res.status(500).json(err);
    }
});