import React from "react";
import Modal from "../Modal";
import { FaTwitter } from "react-icons/fa";

import { CenterImage } from "./styles";
import { Title } from "./styles";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CreateAccountModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <CenterImage>
        <FaTwitter color="#D9D9D9" size="29px" />
      </CenterImage>
      <Title>Criar sua conta</Title>
      <button>Faça login</button>
    </Modal>
  );
};

export default CreateAccountModal;
