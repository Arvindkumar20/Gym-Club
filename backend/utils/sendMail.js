// setup nodemaile
import nodeMailer from "nodemailer"
// import { google } from "googleapis"
import dotenv from "dotenv"
export const sendMail=async(options)=>{
    const transporter=nodeMailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
       service:process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
            }
    })
    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: options.email,
        subject: options.subject,
        text: `${options.message}\n\n Email of user who send the message ${options.userEmail}`,
        };

        await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
                    }




