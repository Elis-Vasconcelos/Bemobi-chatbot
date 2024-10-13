import { generateAIResponse } from "./openia";
import { Role } from './RoleEnum';

export const mockUserData = {
  nome: "João Silva",
  numero: "72983575283",
  perfilPreferido: Role.GERENTE_CONTA, // Role preferido com base nas interações anteriores
};

export const generateUserResponse = async (resultado: any, role: Role) => {
  
  if (resultado.toLowerCase().includes('id')) {
    const aiPrompt = `Te passarei uma lista json de cobranças duplicadas que você acabou de resolver creditando na conta. Assumo que ${role} e fale somente de forma humanizada quais são esses pagamentos para o cliente ${mockUserData.nome}. Sendo esse o json: "${resultado}".`
    return await generateAIResponse(aiPrompt);
  } else {
    const aiPrompt = `Leve em consideração que ${role}. Somente confirme de forma humanizada para o cliente ${mockUserData.nome} que você entendeu que seu problema é sobre ${resultado}, e que está resolvendo isso para ele.  `
    return await generateAIResponse(aiPrompt);
  } 
  
};
