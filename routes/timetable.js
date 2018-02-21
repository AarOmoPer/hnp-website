const express = require('express');

const router = express.Router();

const timetable = [
    {
        day: 'Monday',
        events: [
            {
                title: 'The Shaw Centre',
                from: '9am',
                to: '4pm',
            },{
                title: 'Emerging Futures',
                from: '8am',
                to: '4pm',
            },{
                title: 'Acorn/RAMP Recovery',
                from: '1pm',
                to: '3pm',
            },{
                title: `Maxine Michelle's Dance School`,
                from: '6pm',
                to: '9pm',
            },
        ]
    },{
        day: 'Tuesday',
        events: [
            {
                title: 'The Shaw Centre',
                from: '9am',
                to: '4pm',
            },{
                title: 'Emerging Futures',
                from: '8am',
                to: '4pm',
            },{
                title: 'Community Tuesday',
                from: '10am',
                to: '4pm',
            }
        ]
    },{
        day: 'Wednesday',
        events: [
            {
                title: 'The Shaw Centre',
                from: '9am',
                to: '4pm',
            },{
                title: 'Emerging Futures',
                from: '8am',
                to: '4pm',
            },{
                title: 'Online Application Forms',
                from: '1pm',
                to: '3pm',
            },{
                title: 'IT Drop In',
                from: '12pm',
                to: '3pm',
            },{
                title: 'Acorn/RAMP Recovery',
                from: '1pm',
                to: '3pm',
            }
        ]
    },{
        day: 'Thursday',
        events: [
            {
                title: 'The Shaw Centre',
                from: '9am',
                to: '4pm',
            },{
                title: 'Emerging Futures',
                from: '8am',
                to: '4pm',
            },{
                title: 'Creative Co op',
                from: '12:45pm',
                to: '4pm',
            },{
                title: 'IT Drop In',
                from: '10:30am',
                to: '2pm',
            },{
                title: 'Diabetes Group',
                from: '6:30pm',
                to: '8pm',
            }
        ]
    },{
        day: 'Friday',
        events: [
            {
                title: '(Closed to the public, private bookings only)',
                from: '',
                to: '',
            },{
                title: 'Emerging Futures',
                from: '8am',
                to: '4pm',
            },{
                title: 'Feel Good Friday Drop In',
                from: '10am',
                to: '3pm',
            }
        ]
    },{
        day: 'Saturday',
        events: [
            {
                title: `Maxine Michelle's Dance School`,
                from: '10am',
                to: '12pm',
            }
        ]
    },{
        day: 'Sunday',
        events: [
            {
                title: '(Closed to the public, private bookings only)',
                from: '',
                to: '',
            }
        ]
    }
]

router.use('/', (req, res) => res.status(200).render('timetable', {sender: 'timetable', timetable}))


module.exports = router;