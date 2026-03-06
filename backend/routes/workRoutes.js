const express = require('express');
const router = express.Router();
const { postWork, getWork } = require('../controllers/workController');

router.post('/postWork', postWork);
router.get('/getWork', getWork);

module.exports = router;
