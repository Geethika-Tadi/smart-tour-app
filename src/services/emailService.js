const nodemailer = require('nodemailer');

let transporter = null;

const initTransporter = async () => {
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    console.log(`📧 [EmailService] Connected to SMTP server (${process.env.SMTP_USER})`);
  } else {
    try {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      console.log(`📧 [EmailService] Provisioned Ethereal test inbox: ${testAccount.user}`);
    } catch (err) {
      console.warn(`⚠️ [EmailService] Ethereal provision error: ${err.message}`);
      transporter = nodemailer.createTransport({ jsonTransport: true });
    }
  }
};

const sendOtpEmail = async (toEmail, otp, userName = 'Traveler') => {
  if (!transporter) {
    await initTransporter();
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0f1923; color: #ffffff; padding: 20px; }
        .container { max-width: 520px; margin: 0 auto; background: #132230; border: 1px solid #1f3a52; border-radius: 16px; overflow: hidden; }
        .header { background: linear-gradient(135deg, #0097d6, #00c4a7); padding: 26px; text-align: center; }
        .header h1 { margin: 0; color: #ffffff; font-size: 24px; letter-spacing: 1px; }
        .body { padding: 30px 24px; }
        .greeting { font-size: 16px; color: #e0f0ff; margin-bottom: 14px; }
        .otp-container { text-align: center; margin: 26px 0; }
        .otp-box { display: inline-block; background: #0b1520; border: 2px dashed #00c4a7; border-radius: 12px; padding: 14px 28px; font-size: 32px; font-weight: 700; letter-spacing: 8px; color: #00c4a7; }
        .note { font-size: 13px; color: #7ab8d4; line-height: 1.6; margin-bottom: 20px; text-align: center; }
        .badge { display: inline-block; background: rgba(0, 196, 167, 0.15); border: 1px solid #00c4a7; color: #00c4a7; font-size: 11px; font-weight: 700; padding: 4px 14px; border-radius: 20px; }
        .footer { background: #0d1722; padding: 16px; text-align: center; font-size: 11px; color: #567b95; border-top: 1px solid #1f3a52; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✈️ SmartTour Verification</h1>
        </div>
        <div class="body">
          <p class="greeting">Hello <strong>${userName}</strong>,</p>
          <p style="color:#a8d8ea;font-size:14px;line-height:1.6;">
            Thank you for registering on SmartTour. To activate your account and view live IRCTC trains & bookings, enter this 6-digit verification code:
          </p>
          
          <div class="otp-container">
            <div class="otp-box">${otp}</div>
          </div>

          <div style="text-align:center;margin-bottom:18px;">
            <span class="badge">🛡️ Valid for 10 minutes</span>
          </div>

          <p class="note">
            If you did not make this request, please ignore this email. Never share your OTP with anyone.
          </p>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} SmartTour India. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.SMTP_FROM || '"SmartTour Verification" <no-reply@smarttour.in>',
    to: toEmail,
    subject: `🔐 ${otp} is your SmartTour & IRCTC Verification Code`,
    text: `Your verification code is: ${otp}. It is valid for 10 minutes.`,
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`\n======================================================`);
    console.log(`✉️ [OTP Email Sent Successfully]`);
    console.log(`Recipient: ${toEmail}`);
    console.log(`MessageId: ${info.messageId}`);
    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log(`🔗 Ethereal Live Email Web Preview: ${previewUrl}`);
    }
    console.log(`======================================================\n`);

    return {
      sent: true,
      messageId: info.messageId,
      previewUrl: previewUrl || null,
    };
  } catch (error) {
    console.error(`❌ [Email Error] Failed to send email to ${toEmail}:`, error.message);
    return {
      sent: false,
      error: error.message,
    };
  }
};

module.exports = {
  sendOtpEmail,
};
