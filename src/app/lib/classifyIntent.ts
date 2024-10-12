import { generateAIResponse } from "./openia";

export const classifyIntent = async (userInput: string) => {
  const aiPrompt = `The user has the following complaint: "${userInput}". Based on the complaint, classify it into one of these categories: 
  - Taxas bancárias não autorizadas
  - Serviços não solicitados
  - Cobranças duplicadas
  - Erros em faturas
  - Cobranças após o cancelamento
  
  Return only the category that best describes the issue.`;

  const aiResponse = await generateAIResponse(aiPrompt);
  
  // Certifique-se de que aiResponse não é undefined antes de usá-la
    if (typeof aiResponse !== 'undefined') {
        return aiResponse.trim();  // Return the classified category
    } else {
        console.error("aiResponse está indefinida");
    }
    
};
