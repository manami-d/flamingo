import fetch from 'node-fetch';

const sendEmail = async ({ name, email, message, subject }) => {
    await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
            personalizations: [
                {
                    to: process.env.EMAIL,
                    subject
                }
            ],
            from: {
                email: 'carl.davidson@hotmail.com',
                name: 'Flamingo Seitai Website'
            },
            content: [
                {
                    type: 'text/html',
                    value: `
                    <em>From:</em>${name}
                    <em>Email:</em>${email}
                    <em>Subject:</em>${subject}
                    <em>Message:</em>${message}
                    `
                }
            ]
        })
    });
};

export { sendEmail };
