const express = require('express');
const router = express.Router();
const multer = require('../uploads/multer');
const { postUser, getUser } = require('../controllers/usersController');

router.get('/getUsers', getUser);
router.post('/postUsers', multer.any(), postUser);

module.exports = router;