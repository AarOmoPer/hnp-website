const express = require('express');
const router = express.Router();

const projects = {
    nmcp: {
        title: 'North Manchester Community Partnership', 
        content:
        `We seek to improve the capacity & skills of our socially disadvantaged community.<br /><br />To do this, we... <br /><br /><ul style="list-style-type:square">
        <li>Provide I.A.G. to North Manchester residents seeking employment, training or volunteering.</li>
        <li>Deliver 10 outreach sessions offering work clubs activities.</li>
        <li>Benefits advice service.</li>
        <li>Digital skills training.</li>
        <li>Accredited online & classroom training.</li>
        <li>Volunteering opportunities and access to community led activities.</li></ul> <br /><br /><span class='has-text-danger'>Call:  N.M.C.P  -   07 910 603 408  or  07 712 633 654</span>`
    },
    workClub: {
        title: 'Work Club',
        content: `Wednesdays 10am – 12 noon, get ready for work!
        <br /><br />
        Get help with -
        <br /><br />
        <ul style="list-style-type:square">
            <li>Universal Job Match</li>
            <li>Online Job Searching</li>
            <li>Using email</li>
            <li>Creating a CV</li>
            <li>Job Application Forms</li>
            <li>Education and Training</li>
        </ul><br /><br />For more information please ring 205 5143`
    },
    allProjects: [
        [{img:"/img/tsc.jpg", title: "The Shaw Centre", link: 'http://www.theshawcentre.org.uk/'}, {img:'/img/emf.png', title: 'Emerging Futures', link: 'http://www.emergingfutures.org.uk/projects/manchester/'}, {img:'/img/wc.png', title: 'Work Club', link: '/projects/work_club'}],
        [{img:'https://uk.megabus.com/globalassets/cities/manchester/uk_city_guide_manchester_02.jpg?preset=h_promo', title: "North Manchester Community Partnership", link: '/projects/north_manchester_community_partnership'}],
    ]
}

router.use('/north_manchester_community_partnership', (req, res) => res.render('temp', {sender: 'project', module: projects.nmcp}));
router.use('/work_club', (req, res) => res.render('temp', {sender: 'project', module: projects.workClub}));
router.use('/', (req, res) => res.render('temp', {sender: 'projects', projects: projects.allProjects}));

module.exports = router;