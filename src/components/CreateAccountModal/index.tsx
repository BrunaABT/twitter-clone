import React from "react";
import { useState } from "react";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled =
    name === "" || username === "" || email === "" || password === "";

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <CenterImage>
        <FaTwitter color="#D9D9D9" size="29px" />
      </CenterImage>
      <Title>Criar sua conta</Title>
      <InputContainer>
        <Input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      <Button height="47px" width="526px" isDisabled={isDisabled}>
        Avançar
      </Button>
    </Modal>
  );
};

export default CreateAccountModal;
