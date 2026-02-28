const express = require('express');
const router = express.Router();
const { postUser,getUser } = require('../controllers/usersController');


router.get('/getUsers',getUser);
router.post('/postUsers',postUser);

module.exports = router;