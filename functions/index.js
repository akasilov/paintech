const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const cors = require('cors')({
  origin: true
})
const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
})

exports.submit = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
  res.set('Access-Control-Allow-Headers', '*')

  if (req.method === 'OPTIONS') {
    res.end()
  } else {
    cors(req, res, () => {
      if (req.method !== 'POST') {
        return
      }

      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: gmailEmail,
        subject: `Paintedch Information Inquiry: ${req.body.email} `,
        text: req.body.comment,
        html: `<p>${req.body.comment}</p>`,
      }

      return mailTransport.sendMail(mailOptions).then(() => {
        console.log('New email sent to:', gmailEmail)
        res.status(200).send({
          isEmailSend: true
        })
        return
      })
    })
  }
})

exports.order = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
    res.set('Access-Control-Allow-Headers', '*')
  
    if (req.method === 'OPTIONS') {
      res.end()
    } else {
      cors(req, res, () => {
        if (req.method !== 'POST') {
          return
        }
  
        const mailOptions = {
          from: req.body.email,
          replyTo: req.body.email,
          to: gmailEmail,
          subject: `Paintedch order by ${req.body.name} `,
          text: req.body.comment,
          html: `
                <p><Strong>Name:</Strong>${req.body.name}</p>
                <p><Strong>Email:</Strong>${req.body.email}</p>
                <p><Strong>Comments:</Strong>${req.body.comment}</p>
                <p><Strong>Width:</Strong>${req.body.width}</p>
                <p><Strong>Height:</Strong>${req.body.height}</p>
                <p><Strong>Transport:</Strong>${req.body.transport}</p>
                <img src=data:image/png;base64,${req.body.picture} />
          `,
        }
  
        return mailTransport.sendMail(mailOptions).then(() => {
          console.log('New email sent to:', gmailEmail)
          res.status(200).send({
            isEmailSend: true
          })
          return
        })
      })
    }
  })