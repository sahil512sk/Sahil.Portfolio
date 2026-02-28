const express = require('express');
const router = express.Router();
const { postProject } = require('../controllers/projectsController');
const { getProject } = require('../controllers/projectsController');

router.get('/getProject', getProject);
router.post('/postProject', postProject);

module.exports = router;