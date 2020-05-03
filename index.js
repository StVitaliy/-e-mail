var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vstrizhka@gmail.com',
    pass: 'tought88)*'
  }
});

var mailOptions = {
  from: 'vstrizhka@gmail.com',
  to: 'andreynid@ukr.net',
  subject: 'Sending Email using Node.js',
  text: 'отпраvgghtyhyjuhjhuвился'
};


transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });