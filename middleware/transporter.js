require("dotenv").config();
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const transporter = {
  sendMail: async ({ from, to, subject, html }) => {
    return await resend.emails.send({
      from: from || `Shopora <onboarding@resend.dev>`,
      to,
      subject,
      html,
    });
  },
};

module.exports = transporter;