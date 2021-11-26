import React from "react";
import Modal from "../Modal";
import { FaTwitter } from "react-icons/fa";
import Button from "../Button";
import Input from "../Input";

import { CenterImage } from "./styles";
import { Title } from "./styles";
import { InputContainer } from "./styles";

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
      <InputContainer>
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" type="email" />
      </InputContainer>
      <Button height="47px" width="526px">
        Avançar
      </Button>
    </Modal>
  );
};

export default CreateAccountModal;
