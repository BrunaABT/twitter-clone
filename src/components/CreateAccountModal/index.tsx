import React from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import Modal from "../Modal";
import { FaTwitter } from "react-icons/fa";
import Button from "../Button";
import Input from "../Input";

import { CenterImage } from "./styles";
import { Title } from "./styles";
import { InputContainer } from "./styles";
import validateCreateAccountFields from "../../utils/validateCreateAccountFields";
import { api } from "../../services/api";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CreateAccountModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const isDisabled =
    name === "" ||
    username === "" ||
    email === "" ||
    password === "" ||
    loading;

  const onClose = () => {
    setName("");
    setEmail("");
    setUsername("");
    setPassword("");
    setIsOpen(false);
  };

  const createAccount = async () => {
    const validation = validateCreateAccountFields(
      name,
      username,
      email,
      password
    );
    if (typeof validation === "string") {
      toast.error(validation);
    }

    setLoading(true);

    // chamar a api para criar um usuário
    try {
      await api.post("/users", { name, email, username, password });
      toast.success("Conta criada com sucesso!");
      onClose();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Algo deu errado...");
    }

    setLoading(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose}>
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
      <Button
        height="47px"
        width="526px"
        isDisabled={isDisabled}
        onClick={createAccount}
      >
        Avançar
      </Button>
    </Modal>
  );
};

export default CreateAccountModal;
