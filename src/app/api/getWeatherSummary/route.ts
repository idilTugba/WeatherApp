import { NextResponse } from "next/server";
import openai from "../../../../openai";

export async function POST(request: Request) {
  const { weatherData } = await request.json();

  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Pretend you are a weather news presenterpresenting LİVE on television. Be energetic and full of charisma 
    Intruduce yourself as ISIS and say you are LIVE from the IT. State the city you are providing summary for. Then give a summary of today weather only.
    Make it easy for the viewer to understand and know what to do prepare for those weather conditions such as wear SPF if UV is high etc. 
    use the UV_index data provided to provide uv advice. Provide a joke regarding the weather. Asume the data came from your team at the news office and not the user. `,
      },
      {
        role: "user",
        content: `Hi there, can iget a summary of todays weather. use the following information to get the weather
        data: ${JSON.stringify(weatherData)}`,
      },
    ],
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
  });

  return NextResponse.json(response.choices[0].message);
}
