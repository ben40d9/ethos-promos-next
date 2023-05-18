// const mailchimp = require("@mailchimp/mailchimp_marketing");
// const generateContent = require("./generateContent");

// require("dotenv").config();

// mailchimp.setConfig({
//   apiKey: "1c05fd309a1fe864251991d6d8376470-us21",
//   server: "us21", // The server prefix is the part after the dash in your API key
// });

// async function callPing() {
//   const response = await mailchimp.ping.get();
//   console.log(response);
// }

// callPing();

// async function sendEmail(email, company) {
//   const subject = `Welcome to ${company}!`;
//   const content = await generateContent(company);

//   try {
//     const response = await mailchimp.messages.send({
//       message: {
//         from_email: "ben@ethospromos.com",
//         subject: subject,
//         text: content,
//         to: [
//           {
//             email: email,
//             type: "to",
//           },
//         ],
//       },
//     });

//     console.log(response);
//   } catch (error) {
//     console.error("Failed to send email:", error);
//   }
// }

// module.exports = sendEmail;

const mailchimpTransactional = require("@mailchimp/mailchimp_transactional")(
  `${process.env.MAILCHIMP_API_KEY}`
);
const generateContent = require("./generateContent.js");

async function sendEmail(email, company) {
  const subject = `Welcome to ${company}!`;
  const content = await generateContent(company);

  try {
    const response = await mailchimpTransactional.messages.send({
      template_content: [{}],
      template_name: "template_name",
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
