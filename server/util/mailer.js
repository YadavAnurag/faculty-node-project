const nodemailer = require('nodemailer');
const xoauth2 = require('oauth2');
var logger = require('./logger');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth : {
      type: "oauth2",
      user: "anuragyadav13481@gmail.com",
      clientId: "950446218787-opbvnkmvh6sigf2osqrdd1el294mkkhs.apps.googleusercontent.com",
      clientSecret: "3znTvSN9CG1eFBm5_eAaXt_l",
      accessToken: "ya29.Glv6BR6_lu8leNpju4Ks6WzjPLuA3fDJty8SpASo7n2dDrO9UAlK4X6inBeFg9DVfTQEWl8s8Gy_CXhbX_M0_ixLE9ZLSYi77LmE1ECCJyPTNOQciIpX-h_yHRY0",
      refreshToken: "1/tU-SC39wUVAfMBFkFzMybL7XjO0U8VaOTVHG9a9E_J0"
  }
});

var mailOptions = {
  from : 'anuragyadav13481@gmail.com',
  to : "dsscs@mmmut.ac.in, dss_mec@yahoo.co.in",
  subject : 'New Subject',
  text : 'This is body',
  html : '<h1 style="text-align:center">Anurag<h1><br><p style="text-align:justify; color:green; font-size:20px;">Hello how are you this is me Anurag Yadav sending an email to you to find how to send and email using nodemailer</p>',
};


exports.sendMail = function(newMailOptions){

  mailOptions.from = `${newMailOptions.email}`;
  mailOptions.subject = newMailOptions.subject;
  mailOptions.html = `
  <div style="width:65%;color:white;padding: 12px;background-color:indigo;border-radius:12px; margin: 0 auto">
  <h1 style="text-align:center">New User Want to connect you..<h1>
  <p style="text-align:justify;font-size:20px;">
    Name : ${newMailOptions.firstName} ${newMailOptions.middleName} ${newMailOptions.lastName} <br>
    Email : ${newMailOptions.email} <br>
    Phone Number : ${newMailOptions.phoneNumber} <br>
    Subject : ${newMailOptions.subject} <br><br>
    Message: ${newMailOptions.message} <br>
  </p></div>
  `;

  transporter.sendMail(mailOptions, function(error,info){
    if (error) {
      logger.log(error.message);
    }
    else {
      logger.log('Mail sent : '+ info.accepted);
    }
  });
};

