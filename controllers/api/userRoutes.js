const router = require('express').Router();
const {User, Post} = require('../../models');

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();
        if (!userData) {
            res.status(404).json({message: 'No user data found'});
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;