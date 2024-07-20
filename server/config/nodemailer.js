const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'angelmontoya1130@gmail.com',
    pass: 'Dokichan27'
  }
});

module.exports = transporter;
