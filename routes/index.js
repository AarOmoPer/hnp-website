const express = require('express');
const router = express.Router();
const services = require('./services');
const projects = require('./projects');
const contact = require('./contact');
const timetable = require('./timetable');

router.use('/services', services)
router.use('/projects', projects)
router.use('/contact', contact)
router.use('/timetable', timetable)
router.use('/', (req, res) => res.render('temp', {sender: 'home'}))

module.exports = router;