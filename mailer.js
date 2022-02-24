const nodemailer = require('nodemailer');

async function enviar(to, subject, html) {

    let mailOptions = {
        from: 'nodemailerADL@gmail.com',
        to,
        subject,
        html
    }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'demodemojq@gmail.com',
            pass: 'demo123456',
        },
    })

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) console.log(err)
        if (data) console.log(data)
    })
}

module.exports = enviar