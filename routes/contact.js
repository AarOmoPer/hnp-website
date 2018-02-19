const express = require('express');

const router = express.Router();

const mailjet = require('node-mailjet').connect(process.env.MJ_APIKEY_PUBLIC || '5d4f037839b841880c6f3c4532ee7655', process.env.MJ_APIKEY_PRIVATE || '56611f8b46be98dd0a5a280f72489bde')

const postMessage = (req, res) => {
    console.log(req.body);

    const request = mailjet
        .post("send", {'version': 'v3.1'})
        .request(JSON.stringify({
            "Messages": [
                {
                    "From": {
                        "Email": `janeausten99@protonmail.com`,
                        "Name": `${req.body.name}`
                    },
                    "To": [
                        {
                            "Email": "uproot18@gmail.com",
                            "Name": "Jane the writer"
                        }
                    ],
                    "Subject": "Your email flight plan!",
                    "TextPart": "Dear passenger, welcome to Mailjet! May the delivery force be with you!",
                    "HTMLPart": "<h3>Dear passenger, welcome to Mailjet!</h3><br />May the delivery force be with" +
                        " you!"
                }
            ]
        }))
    request.then((result) => {
        console.log(result.body)
    }).then(() => res.status(200).render('contact')).catch((err) => {
        console.log(err)
    })

}

router.get('/', (req, res) => res.render('contact'))
router.post('/', postMessage)

module.exports = router;
