"use client"

import React from "react";
import styles from "./modal.module.css"; 
import Header from "../Header/header";

interface ModalProps {
  isOpen: boolean; // Propriedade para controlar se o modal está aberto
  onClose: () => void; // Função para fechar o modal
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Se o modal não estiver aberto, não renderiza nada

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <Header onClose={onClose}/>
      </div>
    </div>
  );
};

export default Modal;
