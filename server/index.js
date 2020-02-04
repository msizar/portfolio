const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: `${process.env.MAIL}`,
    pass: `${process.env.KEY}`,
  },
});

// { name: 'themba', email: 'sads@sdfsf', message: 'sdfsfdfsd' }


app.post('/api/email', (req, res) => {
  const user = req.body;

  const mailOptions = {
    from: user.email, // sender address
    to: 'tfmzworld@gmail.com', // list of receivers
    subject: 'MSIZA DEV PERSONAL BUSINESS', // Subject line
    html: `<p>${user.message}</p>`, // plain text body
  };


  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.send(
        `${JSON.stringify(err)}`,
      );
    } else {
      res.send(
        `${JSON.stringify(info)}`,
      );
    }
  });
});

app.listen(port);
