const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const EMAIL = process.env.EMAIL;
const PASS = process.env.EMAIL_PASSWORD;
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

const { transporter } = require('./mail');


app.post("/api/sendMail", async (req, res) => {

  try {
    await transporter.sendMail({
      from: ` ${req.body.email}`,
      to: `${EMAIL}`,
      subject: "New contact us message ",
      html: `<h4>Sender:</h4>
              <p>${req.body.email}</p>
              <h1>${req.body.subject}</h1>
              <p>${req.body.message}</p>`
              
    })
  } catch(e) {
      console.log(e)
  }

res.send('<h1>Thank you. We will get back to you soon </h1>');
})

app.listen(5000,  () => {
    console.log( "Server Running at 5000 ");
})
