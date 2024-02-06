import dotenv from 'dotenv' //Module
// const dotenv = require('dotenv')
// import OpenAI from 'openai'; //Module
// const OpenAI = require('openai');

// const fetch = require('node-fetch');
import fetch from 'node-fetch';

dotenv.config()

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY
// });

//   async function main() {
//     const completion = await openai.chat.completions.create({
//       messages: [{"role": "system",
//       "content": "Say this is a test"}],
//       model: "gpt-3.5-turbo",
//     });
    
//   console.log(completion.choices[0]);
// }
// main();
// module.exports.default = main()

// const OPENAI_API_KEY="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"


async function request(){
  await fetch("https://api.openai.com/v1/chat/completions",{
  method: "POST",
  headers:{
   accept: "application/json",
   "content-Type": "application/json",
   Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, //To run this api key you should add it to the .env file
   organization: process.env.OPENAI_ORG_ID
  },
  body: JSON.stringify({
    model: "davinci-002",
    prompt: [{"role":"user", "content":"Say this is a text"}],
    max_tokens: 2048,
    temperature: 1
  })
})
.then(data => data.json())
.then(response =>{
  console.log(response)
})
.catch(err=>{
  console.log(err)
})
} 

request()