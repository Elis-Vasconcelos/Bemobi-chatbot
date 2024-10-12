"use client"

import { useState } from 'react';
import axios from 'axios';
import { classifyIntent } from '../lib/classifyIntent';
import { identifyDuplicateCharges } from '../lib/duplicateChecker';
import { applyCreditOrEscalate } from '../lib/creditOrEscalate';
import { generateUserResponse } from '../lib/generateUserResponse';

const BillingPage = () => {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    // Step 1: Classify the user's issue
    const issueCategory = await classifyIntent(userInput);
    
    let result;
    if (issueCategory === 'Cobranças duplicadas') {
      // Step 2: Handle duplicate charges as before
      const { data } = await axios.get('/api/billing');
      const duplicateCharges = await identifyDuplicateCharges(data);
      result = await applyCreditOrEscalate(duplicateCharges);
    }
    
    // Add more conditions for other categories if needed
    // For now, just focus on handling 'Cobranças duplicadas'
    
    const aiResponse = await generateUserResponse(result);
    if (aiResponse) {
        setResponse(aiResponse);
    } else {
        setResponse('No response generated.');
    }
  };

  return (
    <div>
      <h1>Billing Issue Assistant</h1>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Describe your issue"
      />
      <button onClick={handleSubmit}>Submit</button>
      {response && <p>{response}</p>}
    </div>
  );
};

export default BillingPage;
