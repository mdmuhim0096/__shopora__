const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "muhinking765@gmail.com",
    pass: "pohm cmmk bbyh etbg",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Verify connection (IMPORTANT for debugging)
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email transporter error:", error);
  } else {
    console.log("✅ Email server is ready");
  }
});

module.exports = transporter;