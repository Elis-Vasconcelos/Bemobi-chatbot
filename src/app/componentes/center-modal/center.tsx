"use client";

import { useState } from 'react';
import { classifyIntent } from '../../lib/classifyIntent';
import { identifyDuplicateCharges } from '../../lib/duplicateChecker';
import { applyCreditOrEscalate } from '../../lib/creditOrEscalate';
import { generateUserResponse } from '../../lib/generateUserResponse';
import { IntentCategoria } from '../../lib/IntentEnum';
import { Role } from '../../lib/RoleEnum';
import { mockUserData } from '../../lib/generateUserResponse';
import styles from './center.module.css';

const mockBillingData = {
    charges: [
      { id: 1, descricao: "Serviço A", valor: 100.0, data: "2024-10-01" },
      { id: 2, descricao: "Serviço A", valor: 100.0, data: "2024-10-01" },
      { id: 3, descricao: "Serviço B", valor: 50.0, data: "2024-10-05" },
    ],
  };
  
  export default function Center() {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);
  
    const handleSubmit = async () => {
      if (!userInput.trim()) return;
  
      const userMessage = { sender: 'user', text: userInput };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setUserInput('');
  
      const categoriaProblema = await classifyIntent(userMessage.text);
      let resultado;
  
      if (categoriaProblema === IntentCategoria.COBRANCAS_DUPLICADAS) {
        const cobrancasDuplicadas = await identifyDuplicateCharges(mockBillingData);
        resultado = await applyCreditOrEscalate(cobrancasDuplicadas);
      } else {
        resultado = categoriaProblema;
      }
  
      const botResponse = await generateUserResponse(resultado, mockUserData.perfilPreferido);
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
    };
  
    return (
      <div className={styles.center}>
        <div className={styles.Tittle}>
          <h1 className={styles.tittle}>Olá! Eu sou o Omni Bot.</h1>
          <h1 className={styles.tittle}>Como posso te ajudar hoje?</h1>
        </div>
  
        <div className={styles.messages}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={msg.sender === 'user' ? styles.mymessage : styles.botMessage}
            >
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
  
        <div className={styles.Input}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Envie uma mensagem..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
            <button onClick={handleSubmit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }