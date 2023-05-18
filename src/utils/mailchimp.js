const mailchimp = require("@mailchimp/mailchimp_marketing");
const generateContent = require("./generateContent");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // The server prefix is the part after the dash in your API key
});

async function callPing() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

callPing();

async function sendEmail(email, company) {
  const subject = `Welcome to ${company}!`;
  const content = await generateContent(company);

  try {
    const response = await mailchimp.messages.send({
      message: {
        from_email: "ben@ethospromos.com",
        subject: subject,
        text: content,
        to: [
          {
            email: email,
            type: "to",
          },
        ],
      },
    });

    console.log(response);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}

module.exports = sendEmail;
