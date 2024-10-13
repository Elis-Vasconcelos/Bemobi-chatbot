"use client";

import { useState } from 'react';
import axios from 'axios';
import { classifyIntent } from '../lib/classifyIntent';
import { identifyDuplicateCharges } from '../lib/duplicateChecker';
import { applyCreditOrEscalate } from '../lib/creditOrEscalate';
import { generateUserResponse } from '../lib/generateUserResponse';
import { IntentCategoria } from '../lib/IntentEnum';
import { Role } from '../lib/RoleEnum'; // Adicionar roles
import { mockUserData } from '../lib/generateUserResponse';

const mockBillingData = {
  charges: [
    { id: 1, descricao: "Serviço A", valor: 100.0, data: "2024-10-01" },
    { id: 2, descricao: "Serviço A", valor: 100.0, data: "2024-10-01" },
    { id: 3, descricao: "Serviço B", valor: 50.0, data: "2024-10-05" },
  ],
};

const BillingPage = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');
  const [selectedRole, setSelectedRole] = useState<Role>(mockUserData.perfilPreferido); // Selecionar automaticamente com base no perfil do usuário

  const handleSubmit = async () => {
    // Passo 1: Classificar a intenção do usuário
    const categoriaProblema = await classifyIntent(userInput);

    let resultado;
    if (categoriaProblema === IntentCategoria.COBRANCAS_DUPLICADAS) {
      // Passo 2: Lidar com cobranças duplicadas
      const data = mockBillingData;
      const cobrancasDuplicadas = await identifyDuplicateCharges(data);
      resultado = await applyCreditOrEscalate(cobrancasDuplicadas);
    } else {
      // Mensagem genérica para outras categorias
      resultado = categoriaProblema;
    }

    console.log(resultado)
    const respostaUsuario = await generateUserResponse(resultado, selectedRole); // Passar o role
    setResponse(respostaUsuario ?? '');
  };

  return (
    <div>
      <h1>OmniBot</h1>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Descreva seu problema"
      />
      <button onClick={handleSubmit}>Enviar</button>
      {response && <p>{response}</p>}
    </div>
  );
};

export default BillingPage;
