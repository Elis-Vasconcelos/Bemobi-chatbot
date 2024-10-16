import 'dotenv/config';
import OpenAI from 'openai';
import { mockUserData } from './generateUserResponse';

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true
});

export const generateAIResponse = async (prompt: string) => {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: "user", content: prompt } ],
      temperature: 0.7,
    });
  
    if (response && response.choices && response.choices[0]) {
      return response.choices[0].message.content?.trim();
    } else {
      throw new Error("Resposta inválida da API");
    }
};
