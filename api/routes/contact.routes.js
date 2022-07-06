const express = require('express'),
      router = express.Router(),
      nodemailer = require('nodemailer'),
      transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 587,
        secure: false,
        auth: {
          user: 'apikey',
          pass: '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',
        }
      })

router.route("/")
  .post((req, res) => {
    transporter.sendMail({
      from: `"${req.body.params.name}" <${req.body.params.email}>`,
      to: `contact@erchelpers.com`,
      // to: `onyx18121990@gmail.com`,
      subject: 'Contact Us from https://erchelpers.com/',
      html: `${req.body.params.message}`
    })
      .then(response => {
        res.send({
          status: 'success',
          msg: 'We will answer you shortly!'
        })
      })
      .catch(error => {
        res.send({
          status: 'error',
          msg: error
        })
      })
  })

module.exports = router