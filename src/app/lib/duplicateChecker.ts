import { generateAIResponse } from "./openia";

export const identifyDuplicateCharges = async (billingData: any) => {
  const aiPrompt = `Identifique cobranças duplicadas na lista fornecida. Se houver duplicatas, retorne-as em formato JSON. Caso contrário, responda apenas "não há cobranças duplicadas". Identifique cobranças duplicadas. Elas têm o formato de ter a mesma descrição, valor e data, mas ids diferentes. Dados: ${JSON.stringify(billingData.charges)}`;

  const aiResponse = await generateAIResponse(aiPrompt);
  if (aiResponse) {
    // // Parse the JSON string to a JavaScript object
    // const charges = JSON.parse(aiResponse);

    // // Add the 'creditada' attribute to one of the charges
    // charges[0].creditada = true; // Adiciona o atributo 'creditada' como 'true' à primeira cobrança
  }
  console.log(aiResponse)

  try {
    return aiResponse;
  } catch (error) {
    console.error("Erro ao analisar a resposta da AI: ", error);
    return [];
  }
};