import 'dotenv/config';
import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true
});

export const generateAIResponse = async (prompt: string) => {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // ou outro modelo como 'gpt-3.5-turbo'
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });
  
    if (response && response.choices && response.choices[0]) {
      return response.choices[0].message.content?.trim();
    } else {
      throw new Error("Resposta inválida da API");
    }
  };
