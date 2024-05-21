const notificationControllers = require('../Controllers/notificationControllers');
const express = require('express');
const router = express.Router();

router.post('/handleLike', notificationControllers.handleLike);
router.post('/handleComment', notificationControllers.handleComment);
router.post('/handleFollow', notificationControllers.handleFollow);

module.exports = router;