const nodemailer = require('nodemailer')

// function definition
const mailer = async function(user){

    // creating a transporter object
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
    
    // creating a mailOptions object
    const mailOptions = {
        from: process.env.EMAIL,
        to: user.email,
        subject: 'Registration Successful',
        text: `Hi ${user.name}, \nYou have successfully Registered on our platform \nThank you`
    }

    // sending the mail
    const info = await transporter.sendMail(mailOptions)
}

// exporting the function
module.exports = mailer