const express = require('express');
const router = express.Router();
const services = require('./services');
const projects = require('./projects');

router.use('/services', services)
router.use('/projects', projects)
router.use('/timetable', (req, res) => res.render('timetable'))
router.use('/contact', (req, res) => res.render('contact'))
router.use('/', (req, res) => res.render('home'))

module.exports = router;