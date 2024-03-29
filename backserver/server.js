const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')
const transporter = require('./config')

const buildPath = path.join(__dirname, '..', 'build')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("db"))

app.use(express.json())
app.use(cors())
app.use(express.static(buildPath))
app.use('/app', routesUrls)

app.post('/send', (req, res) => {
    try {
      const mailOptions = {
        from: req.body.email, // sender address
        to: process.env.email, // list of receivers
        subject: req.body.subject, // Subject line
        html: `
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
          <li>Subject: ${req.body.subject}</li>
          <li>Message: ${req.body.message}</li>
        </ul>
        `
      };
  
      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          res.status(500).send({
            success: false,
            message: 'Something went wrong. Try again later'
          });
        } else {
          res.send({
            success: true,
            message: 'Thanks for contacting us. We will get back to you shortly'
          });
        }
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Something went wrong. Try again later'
      });
    }
  });
  

app.listen(4000, () => console.log("Server is up"))
