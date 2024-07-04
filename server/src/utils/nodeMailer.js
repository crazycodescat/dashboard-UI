import nodemailer from 'nodemailer';

async function nodeMailer(mailOptions) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.google.com',
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.GMAIL_ID,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail(mailOptions);
    if (info.response) {
      return { status: 200, message: 'Email sent successfully ✔' };
    }
    return;
  } catch (error) {
    return { errMessage: error.message, status: 500 };
  }
}

export default nodeMailer;
