import React from "react";
import { useModalStore } from "../../hooks/store/useModalStore";
import { Modal } from "./Modal";

const GlobalModal: React.FC = () => {
  const { isOpen, content, closeModal } = useModalStore();

  if (!isOpen) {
    return null;
  }

  return <Modal onClose={closeModal}>{content}</Modal>;
};

export default GlobalModal;
