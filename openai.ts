//OPENAI V4
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default openai;

//OPEN AI V3
// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);
// export default openai;
