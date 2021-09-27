const router = require('express').Router();
const {User, Post} = require('../models');
const withAuth = require('../utils/withAuth');

//Sends the homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({include: User});
        const posts = postData.map((post) => post.get({plain:true}));
        console.log(posts);
        res.render('homepage', {posts, logged_in: req.session.logged_in});
    } catch (err) {
        res.status(500).json(err);
    }
});

// Sends the login page
router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

// Sends the dashboard page
// router.get('/dashboard', withAuth, async (req, res) => {
//     try {
//         const postData = await Post.findAll({
//             where: {id: req.session.user_id},
//             include: User
//         });
//         const posts = postData.map((post) => post.get({plain:true}));
//         res.render('dashboard', {posts, logged_in: req.session.logged_in});
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;