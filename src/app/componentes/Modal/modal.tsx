"use client";

import React from "react";
import styles from "./modal.module.css"; 
import Header from "../header/header";
import Center from "../center-modal/center";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <Header onClose={onClose} />
        <Center />
      </div>
    </div>
  );
};

export default Modal;
