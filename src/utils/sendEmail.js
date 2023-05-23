const sgMail = require("@sendgrid/mail");

// const generateContent = "./generateContent";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async ({ to, subject, msg }) => {
  // const text = await generateContent(subject);
  // console.log("Generated content:", text); // Ato print the generated content to the console

  //am going to have to change so that variables are used to automate the msg paramaters
  var msg = {
    to: "benpaley6@gmail.com", // Change to your recipient
    from: "ben@ethospromos.com", // Change to your verified sender
    subject: "I am Sending with SendGrid",
    text: "it is easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  try {
    await sgMail.send(msg);
    await console.log("Email sent");
  } catch (error) {
    console.error("Error sending email:", error);
    if (error.response) {
      console.error("Response error:", error.response.body);
    }
    throw error; // Re-throw the error so it can be caught and handled elsewhere
  }
};

module.exports = sendEmail;
