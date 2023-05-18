const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateContent(company) {
  const openai = new OpenAIApi(configuration);
  const prompt = `Generate a promotional email content for ${company}.`;
  const response = await openai.createCompletion({
    engine: "davinci-codex",
    prompt: prompt,
    maxTokens: 100,
  });

  return response.choices[0].text.trim();
}

module.exports = generateContent;
