import { generateAIResponse } from "./openia";

export const generateUserResponse = async (duplicateCharges: any) => {
  const aiPrompt = `We have found duplicate charges: ${JSON.stringify(
    duplicateCharges
  )}. Can you generate a polite response for the user, explaining that we have credited their account or escalated the issue?`;

  const aiResponse = await generateAIResponse(aiPrompt);
  return aiResponse;
};
