import React from "react";
import { createPortal } from "react-dom";
import { ModalContent, ModalBackdrop, ModalWrapper } from "./index.style";

export const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <ModalWrapper id="modal">
      <ModalContent>{children}</ModalContent>
      <ModalBackdrop onClick={onClose} />
    </ModalWrapper>,
    document.body
  );
};
