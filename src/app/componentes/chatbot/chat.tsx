"use client"

import React, { useState } from "react";
import styles from "./chat.module.css";
import Modal from "../Modal/modal";

const ButtonChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a abertura do modal

  const openModal = () => setIsOpen(true);   // Função para abrir o modal
  const closeModal = () => setIsOpen(false);  // Função para fechar o modal

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button
            className={`${styles.button} ${isOpen ? styles.hidden : ''}`} // Adiciona a classe 'hidden' se o modal estiver aberto
            onClick={openModal}
          >
            B
          </button>
      </main>
      <Modal isOpen={isOpen} onClose={closeModal} /> 
    </div>
  );
};

export default ButtonChat;
