import { generateAIResponse } from "./openia";

export const identifyDuplicateCharges = async (billingData: any) => {
  const aiPrompt = `Here is the billing data for a customer: ${JSON.stringify(
    billingData.charges
  )}. Can you identify any duplicate charges based on amount, description, and date? If yes, return the duplicates in JSON format.`;

  const aiResponse = await generateAIResponse(aiPrompt);

  let duplicates;
  if (aiResponse) {
    try {
      duplicates = JSON.parse(aiResponse);
    } catch (error) {
      duplicates = [];
    }
  } else {
    duplicates = [];
  }

  return duplicates;
};
