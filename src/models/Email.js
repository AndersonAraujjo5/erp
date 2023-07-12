const nodemailer = require('nodemailer');
require('dotenv').config();

class Email{
  send(to, title, template){
    const html = template
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.FROMEMAIL,
        pass: process.env.PASSWORDEMAIL,
      },
      tls: { rejectUnauthorized: true }
    });

    const mailOptions = {
      from: process.env.FROMEMAIL,
      to,
      subject:title,
      html
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email enviado: ' + info.response)
      }
    });
  }
}

export default new Email();
