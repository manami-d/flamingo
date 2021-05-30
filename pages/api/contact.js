export default function (req, res) {
    require('dotenv').config();

    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
            type: 'OAuth2',
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN
        },
        secure: true
    });
    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `Message From ${req.body.name}`,
        text: req.body.message + ' | Sent from: ' + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
    };
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log('Error ' + err);
        } else {
            console.log('Email sent successfully');
        }
    });
    res.status(200).send();
}
