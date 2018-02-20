const express = require('express');
const router = express.Router();

const services = {
    whatsOn: {
        title: "What's on @ HNP",
        content: "",
    },
    roomHire: {
        title: "Room Hire",
        content: `Harpurhey Neighbourhood Centre offers a range of rooms for various activities. Our Coffee Bar and Dining Room are open to all Centre users and members of the public. We have other rooms which can be booked for use by community groups or other organisations. These range from small meeting rooms to our Hall which can hold over 100 people.
        
        Charges for rooms are on a sliding scale, with small unfunded groups paying the least and statutory agencies paying the most. New community groups may not be asked to pay for room use until they have managed to obtain funding.
        
        If you would like to book space at the Centre please get in touch.`,
    },
    itFacilities: {
        title: "I.T. Facilities",
        content: `At HNP we have a fully equipped IT suite and a variety of equipment including computers with internet access, scanners, printers and digital cameras. This is available for use by local people and community groups. We can also offer basic help with using this equipment. Regular drop-in sessions are held when people can use the equipment with help on hand or arrangements can be made to use the equipment at a time to suit your group.
        
        Computers can be used for any reason whether you would like to look up something on the internet, practice your computer skills or produce publcity for your community group.<br />Please get in touch with us if you would like more information.`,
    }, 
    adviceGroups: {
        title: "Advice & Support for Community Groups",
        content: `We offer support to local groups on a number of topics including advice of setting up and constitutions, managing and publicising the group and making grant applications or other fundraising. We can also help to build links between groups as appropriate.`,
    },
    advicePeople: {
        title: "Advice & Information for Local People",
        content: `We offer advice and information to local people on a variety of issues, particularly housing and benefits. We can help by giving basic advice, helping people to find information they need and by referring people to specialists such as Manchester Citizens Advice Bureau.`,
    },
    privateFunctions: {
        title: "Private Functions",
        content: `As well as being available for use by community groups the Centre can be booked for a variety of parties and other functions. Catering can be provided along with a licenced bar if required. Charges for private functions are available on request and members of HNP receive a discount on these charges.`,
    },
    catering: {
        title: "Catering",
        content: `We can provide catering for meetings and other events. This can range from tea & biscuits to a full meal, with a range of buffet options in between. The emphasis is on healthy, freshly prepared food and we can provide vegetarian and vegan options. We will also try to meet any special requests for dishes which are not on one of our standard menus. Food can be delivered to other venues in North Manchester at no extra cost (subject to a minimum order size).
        
        Our Coffee Bar and Dining Room are available during the Centre’s normal opening times.`,
    },
    allServices: [
        [{link:"/services/what's_on", title: "What's on", icon: 'question'}, {link:'/services/room_hire', title: 'Room hire', icon: 'home'}, {link:'/services/it_facilities', title: 'I.T. facilities', icon: 'desktop'}],
        [{link:'/services/advice_for_groups', title: "Advice for groups", icon: 'users'}, {link:'/services/advice_and_information_for_local_people', title: 'Advice for individuals', icon: 'user'}, {link:'/services/private_functions', title: 'Private function', icon: 'glass-martini'}],
        [{link:'/services/catering', title: "Catering", icon: 'utensils'}],
    ]
}


router.use("/what's_on", (req, res) => res.status(200).render('serviceTemplate', {sender: 'service', service: services['whatsOn']}));
router.use('/room_hire', (req, res) => res.status(200).render('serviceTemplate', {service: services['roomHire']}));
router.use('/it_facilities', (req, res) => res.status(200).render('serviceTemplate', {service: services['itFacilities']}));
router.use('/advice_for_groups', (req, res) => res.status(200).render('serviceTemplate', {service: services['adviceGroups']}));
router.use('/advice_and_information_for_local_people', (req, res) => res.status(200).render('serviceTemplate', {service: services['advicePeople']}));
router.use('/private_functions', (req, res) => res.status(200).render('serviceTemplate', {service: services['privateFunctions']}));
router.use('/catering', (req, res) => res.status(200).render('serviceTemplate', {service: services['catering']}));
router.use('/', (req, res) => res.status(200).render('services', {services: services.allServices}));

module.exports = router;