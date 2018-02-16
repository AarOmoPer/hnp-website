const express = require('express');
const router = express.Router();

router.use('/room_hire', (req, res) => res.send('room_hire'));
router.use('/catering', (req, res) => res.send('catering'));
router.use('/', (req, res) => res.send('all services'));

module.exports = router;