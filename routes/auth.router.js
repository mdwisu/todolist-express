const express = require('express');
const router = express.Router();
const { Login,  } = require('../controllers/auth.controller');
const { createUser } = require('../controllers/user.controller');

router.post('/login', Login);
router.post('/register', createUser);

module.exports = router;
