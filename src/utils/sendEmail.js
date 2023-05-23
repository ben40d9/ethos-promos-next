const sgMail = require("@sendgrid/mail");

// const generateContent = "./generateContent";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//msg will be defined in the src/pages/api/submit_email/[company].js because it is dependent on the company name and user email
const sendEmail = async (msg) => {
  // const text = await generateContent(subject);
  // console.log("Generated content:", text); // Ato print the generated content to the console

  try {
    await sgMail.send(msg);

    await console.log("Email sent");
    await console.log(msg.to);
    await console.log(msg.text);
  } catch (error) {
    console.error("Error sending email:", error);

    if (error.response) {
      console.error("Response error:", error.response.body);
    }

    throw error; // Re-throw the error so it can be caught and handled elsewhere
  }
};

module.exports = sendEmail;
