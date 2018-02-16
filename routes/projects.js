const express = require('express');
const router = express.Router();

router.use('/the_shaw_centre', (req, res) => res.send('the_shaw_centre'));
router.use('/emerging_futures', (req, res) => res.send('emerging_futures'));
router.use('/', (req, res) => res.send('all projects'));

module.exports = router;