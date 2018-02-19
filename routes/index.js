const express = require('express');
const router = express.Router();
const services = require('./services');
const projects = require('./projects');
const contact = require('./contact');

router.use('/services', services)
router.use('/projects', projects)
router.use('/contact', contact)
router.use('/timetable', (req, res) => res.render('timetable'))
router.use('/', (req, res) => res.render('home'))

module.exports = router;