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
import validateLoginFields from "../../utils/validateLoginFields";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface IProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const LoginModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const isDisabled = email === "" || password === "" || loading;

  const onClose = () => {
    setEmail("");
    setPassword("");
    setIsOpen(false);
  };

  const createAccount = async () => {
    const validation = validateLoginFields(email, password);
    if (typeof validation === "string") {
      toast.error(validation);
    }

    setLoading(true);

    // chamar a api para criar um usuário
    try {
      await api.post("/login", { email, password });
      navigate({ pathname: "/" });
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Não foi possível fazer login."
      );
    }

    setLoading(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose}>
      <CenterImage>
        <FaTwitter color="#D9D9D9" size="29px" />
      </CenterImage>
      <Title>Entre com a sua conta</Title>
      <InputContainer>
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        Entrar
      </Button>
    </Modal>
  );
};

export default LoginModal;
