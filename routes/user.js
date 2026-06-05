const express = require('express');
const router = express.Router();
const { CreateAccount, Login } = require('../controllers/user');

router.post('/signin', CreateAccount);
router.post('/login', Login);

module.exports=router;