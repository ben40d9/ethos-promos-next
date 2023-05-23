const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");
dotenv.config();

// console.log(process.env);
// console.log(process.env.OPENAI_API_KEY);

// const configuration = new Configuration({
//   apiKey: `${process.env.OPENAI_API_KEY}`,
// });

// async function generateContent(company) {
//   const openai = await new OpenAIApi(configuration);
//   // const prompt = `Generate a promotional email content for ${company}.`;
//   const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: `Generate a promotional email content for ${company}.`,
//   });

//   return response.choices[0].text.trim();
// }

// async function generateContent(company) {
//   const openai = await new OpenAIApi(configuration);

//   const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: `Generate a promotional email content for ${company}.`,
//   });

//   console.log(response.data.choices[0].text.trim());

//   if (response && response.choices && response.choices.length > 0) {
//     return response.choices[0].text.trim();
//   } else {
//     console.error("Unexpected response from OpenAI API:", response);
//     return "";
//   }
// }

// generateContent("nordVPN");

// module.exports = generateContent;
