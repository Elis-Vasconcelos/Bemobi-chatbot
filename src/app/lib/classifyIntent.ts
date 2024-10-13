import { generateAIResponse } from "./openia";
import { IntentCategoria } from "./IntentEnum";

export const classifyIntent = async (userInput: string) => {
  const aiPrompt = `O usuário fez a seguinte reclamação: "${userInput}". Baseado na reclamação, classifique-a em uma das seguintes categorias:
  - ${IntentCategoria.TAXAS_NAO_AUTORIZADAS}
  - ${IntentCategoria.SERVICOS_NAO_SOLICITADOS}
  - ${IntentCategoria.COBRANCAS_DUPLICADAS}
  - ${IntentCategoria.ERROS_EM_FATURAS}
  - ${IntentCategoria.COBRANCAS_APOS_CANCELAMENTO}

  Retorne apenas a categoria que melhor descreve o problema.`;

  const aiResponse = await generateAIResponse(aiPrompt);
  if (aiResponse) {
    return aiResponse.trim();
  } else {
    console.error("aiResponse está indefinida");
    return "";
  }
};  