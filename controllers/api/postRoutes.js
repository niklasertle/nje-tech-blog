const router = require('express').Router();
const {User, Post} = require('../../models');

// Gets all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll();
        if (!postData) {
            res.status(404).json({message: 'No post data found'});
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Post to database
router.post('/', async (req, res) => {
    try {
        req.body.user_id = req.session.user_id;
        const postData = await Post.create(req.body);
        res.status(200).json({postData, message: "Post created"});
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;