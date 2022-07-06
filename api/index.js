const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      serverRoutes = require('./routes/user.routes.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(serverRoutes)

app.get('/contact', (req, res) => {
  const nodemailer = require('nodemailer'),
        transporter = nodemailer.createTransport({
          host: "smtp.sendgrid.net",
          port: 587,
          secure: false,
          auth: {
            user: 'apikey',
            pass: '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',
          }
        })
  if(req.query.name && req.query.email && req.query.message){
    transporter.sendMail({
      from: `"ERC Helpers" <noreply@erchelpers.com>`,
      to: `contact@erchelpers.com`,
      subject: 'Contact Us from https://erchelpers.com/',
      html: `<p><b>Name: </b>${req.query.name}</p><p><b>Email: </b>${req.query.email}</p><p><b>Message: </b>${req.query.message}</p>`
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
  } else {
    res.send({
      status: 'error',
      msg: 'parameters is epsent'
    })
  }
})

app.get('/lead', (req, res) => {
  const request = require("request")

  const data = JSON.parse(req.query.data)
  const quizQuestions = {}
  data.forEach((q, i) => {
    quizQuestions[`data${i + 2}`] = q.answer
  })

  request({
    url: 'https://smb.leadbyte.com/restapi/v1.3/leads',
    method: 'POST',
    headers: {
      'X_KEY': '859eda508946525b6b0822ee93037a91',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      "campid": "ERCHELPERS",
      "sid": "3",
      "firstname": req.query.firstname,
      "lastname": req.query.lastname,
      "email": req.query.email,
      "phone1": req.query.phone,
      "company": req.query.company,
      "data1": req.query.data,
      "data6": req.query.lead_source,
      "data7": req.query.company,
      "data8": req.query.utm_source,
      "data9": req.query.utm_medium,
      "data10": req.query.utm_campaign,
      ...quizQuestions,
    })
  }, (error, result, body) => {
    if (error) {
      res.send({
        status: 'error',
        msg: error
      })
    } else {
      const response = JSON.parse(body)
      if(response.status === "Error"){
        res.send({
          status: 'error',
          msg: response.errors[0]
        })
      } else if(response.status === "Success"){
        res.send({
          status: 'success',
          msg: 'We will contact you shortly!'
        })
      } else {
        res.send({
          status: 'error',
          msg: 'Something went wrong try again later!'
        })
      }
    }
  })
})

module.exports = {
  path: '/api',
  handler: app
}