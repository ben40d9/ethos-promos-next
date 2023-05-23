// const { Configuration, OpenAIApi } = require("openai");
import { Configuration, OpenAIApi } from "openai";

import "dotenv/config";

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

// import fetch from "node-fetch";
// // import companies from "../../companies.json"; // replace with the actual path to your companies.json file
// const companies = {
//   namecheap: "https://namecheap.pxf.io/5g53bD",

//   nordvpn: "https://nordvpn.sjv.io/ethosPromos",

//   gizmogo: "https://gizmogo.pxf.io/ethosPromos",

//   golfPartner: "https://golfpartner.sjv.io/ethosPromos",
// };

// const generateContent = async (company) => {
//   try {
//     const affiliateLink = companies[company];
//     const response = await fetch(
//       "https://api.openai.com/v1/engines/davinci-codex/chat/completions",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer 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`,
//         },
//         body: JSON.stringify({
//           model: "gpt-3.5-turbo",
//           messages: [
//             {
//               role: "system",
//               content: "You are a helpful assistant.",
//             },
//             {
//               role: "user",
//               content: `Write a promotional email for a company called nordVPN. Include this affiliate link in the email: ${affiliateLink}`,
//             },
//           ],
//         }),
//       }
//     );

//     const data = await response.json();
//     console.log(response);
//     console.log(data);

//     return data.choices[0].message.content;
//     console.log(data.choices);
//   } catch (error) {
//     console.error("Error generating content:", error);
//     throw error;
//   }
// };

// generateContent("nordVPN");

// export default generateContent;
