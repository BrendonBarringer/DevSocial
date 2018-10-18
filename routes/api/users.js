const express = require('express');
const router = express.Router();

//Load User model
const User = require('../../models/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public

router.get('/test', (req, res) => res.json({msg: "Users Works"})
);

// @route   GET api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
    User
} );

module.exports = router;