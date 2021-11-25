import React, { MouseEvent } from "react";
import { Background } from "./styles";
import { CreateAccount } from "./styles";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Modal: React.FC<IProps> = ({ children, isOpen, setIsOpen }) => {
  const onClose = (
    event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <Background onClick={onClose}>
          <CreateAccount>{children}</CreateAccount>
        </Background>
      )}
    </>
  );
};

export default Modal;
