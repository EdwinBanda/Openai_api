import OpenAI from 'openai';
// const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY']
});

  async function main() {
    const completion = await openai.chat.completions.create({
      messages: [{"role": "system",
      "content": "Say this is a test"}],
      model: "gpt-3.5-turbo",
    });
    
  console.log(completion.choices[0]);
}
main();
// module.exports.default = main()