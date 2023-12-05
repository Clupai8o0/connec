const OpenAI = require("openai")

const openai = new OpenAI({
	apiKey: "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",
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5',
  });
  console.log(chatCompletion)
}

main();