import { generateAIResponse } from "./openia";

export const applyCreditOrEscalate = async (duplicateCharges: any) => {
  const aiPrompt = `We have identified the following duplicate charges: ${JSON.stringify(
    duplicateCharges
  )}. Should we automatically apply a credit or escalate to human support for further review? Provide a recommendation.`;

  const aiResponse = await generateAIResponse(aiPrompt);

  if (aiResponse) {
    return aiResponse.toLowerCase().includes('credit')
      ? duplicateCharges.map((charge: any) => ({
          id: charge.id,
          amountCredited: charge.amount,
          status: 'credited',
        }))
      : { message: 'Issue has been escalated for human review.' };
  } else {
    throw new Error("Resposta inválida da API");
  }
};
