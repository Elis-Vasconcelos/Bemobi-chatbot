import 'dotenv/config';
import OpenAI from 'openai';

const API_KEY: string = process.env.OPENAI_API_KEY

const openai = new OpenAI({
  apiKey: API_KEY
});

export const generateAIResponse = async (prompt: string) => {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });
  
    if (response && response.choices && response.choices[0]) {
      return response.choices[0].message.content?.trim();
    } else {
      throw new Error("Resposta inválida da API");
    }
  };
