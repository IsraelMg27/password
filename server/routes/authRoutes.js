const express = require('express');
const crypto = require('crypto');
const transporter = require('../config/nodemailer');
const db = require('../config/database');

const router = express.Router();

router.post('/send-token', (req, res) => {
  const { email } = req.body;
  const token = crypto.randomBytes(20).toString('hex');

  // Guardar el token en la base de datos asociado al email
  const query = 'INSERT INTO password_resets (email, token) VALUES (?, ?)';
  db.query(query, [email, token], (err, results) => {
    if (err) {
      console.error('Error saving token to database:', err);
      return res.status(500).send('Error saving token to database');
    }

    const mailOptions = {
      from: 'angelmontoya1130@gmail.com',
      to: email,
      subject: 'Password Reset Token',
      text: `Your password reset token is: ${token}`
    };

    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.error('Error sending email:', err);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent:', response);
        res.status(200).send('Email sent');
      }
    });
  });
});

module.exports = router;
