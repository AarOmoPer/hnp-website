const express = require('express');
const moment = require('moment')
const router = express.Router();

let mjKeys
if (!process.env.MJ_APIKEY_PUBLIC) 
    mjKeys = require('../.config').mailjetKeys

const mailjet = require('node-mailjet').connect(process.env.MJ_APIKEY_PUBLIC || mjKeys.pub, process.env.MJ_APIKEY_PRIVATE || mjKeys.priv)
const postMessage = (req, res) => {
    const request = mailjet
        .post("send", {'version': 'v3.1'})
        .request(JSON.stringify({
            "Messages": [
                {
                    "From": {
                        "Email": `hnp@maildrop.cc`,
                        "Name": `Website Contact`
                    },
                    "To": [
                        {
                            "Email": "uproot18@gmail.com",
                            "Name": "HNP Rep"
                        }
                    ],
                    "Subject": `Message from website at ${moment().format('MMMM Do YYYY, h:mm:ss a')}`,
                    "TextPart": JSON.stringify(req.body.name),
                    "HTMLPart": `<h3>${req.body.name}</h3>
                    <h4>${req.body.email}${req.body.phone && ' - ' + req.body.phone}</h4>
                    <p>${req.body.message}</p>`
                }
            ]
        }))
    request.then((mes) => {
        const message = {
            main: 'Thank you for leaving a message.',
            additional: "We'll get back to you as soon as possible."
        }
        res.status(200).render('mail', {message})
    }).catch((err) => {
        console.log(err);
        const message = {
            main: 'Unfortunately something went wrong.',
            additional: "Please try again or contact us by other means"
        }
        res.status(500).render('mail', {message})
    })

}

router.get('/', (req, res) => res.render('contact'))
router.post('/', postMessage)

module.exports = router;
