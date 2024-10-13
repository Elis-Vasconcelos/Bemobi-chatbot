import { generateAIResponse } from "./openia";

export const applyCreditOrEscalate = async (duplicateCharges: any) => {
  const aiPrompt = `De acordo com os json identificados na resposta IA a seguir: ${duplicateCharges}. Devemos aplicar um crédito automaticamente ou encaminhar para suporte humano? Forneça uma recomendação escrevendo somente um dos dois outputs: crédito ou não`;

  const aiResponse = await generateAIResponse(aiPrompt);
  console.log(aiPrompt)
  console.log(aiResponse)

  if (aiResponse) {
    return aiResponse.toLowerCase().includes('crédito')
      ? duplicateCharges
      : { mensagem: 'Problema encaminhado para revisão humana.' };
  } else {
    throw new Error("Resposta inválida da API");
  }
};