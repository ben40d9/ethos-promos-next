const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: `${process.env.OPENAI_API_KEY}`,
});

async function generateContent(company) {
  const openai = await new OpenAIApi(configuration);
  // const prompt = `Generate a promotional email content for ${company}.`;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Generate a promotional email content for ${company}.`,
  });

  //   return response.choices[0].text.trim();
}

module.exports = generateContent;
