const express = require('express');
const messageMiddleware = require('../middleware/messageMiddleware');
const postMessage = require('../controllers/messageControllers')
const router = express.Router();

router.post('/message', messageMiddleware, postMessage);

module.exports = router