const express = require('express');
const router = express.Router();

const projects = {
    allProjects: [
        [{img:"/img/tsc.jpg", title: "The Shaw Centre", link: '/projects/the_shaw_centre'}, {img:'/img/emf.png', title: 'Emerging Futures', link: '/projects/emerging_futures'}, {img:'/img/wc.png', title: 'Work Club', link: '/projects/work_club'}],
        [{img:'https://uk.megabus.com/globalassets/cities/manchester/uk_city_guide_manchester_02.jpg?preset=h_promo', title: "North Manchester Community Partnership", link: '/projects/north_manchester_community_partnership'}],
    ]
}

router.use('/north_manchester_community_partnership', (req, res) => res.send('north_manchester_community_partnership'));
router.use('/work_club', (req, res) => res.send('work_club'));
router.use('/the_shaw_centre', (req, res) => res.send('the_shaw_centre'));
router.use('/emerging_futures', (req, res) => res.send('emerging_futures'));
router.use('/', (req, res) => res.render('projects', {sender: 'projects', projects: projects.allProjects}));

module.exports = router;