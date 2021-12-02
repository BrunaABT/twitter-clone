import { Button } from "./styles";
import { Container } from "./styles";
import { BackgroundContainer } from "./styles";
import { RightContainer } from "./styles";

import { useState } from "react";
import Background from "../../assets/images/login-bg.png";
import { FaTwitter } from "react-icons/fa";
import CreateAccountModal from "../../components/CreateAccountModal";
import LoginModal from "../../components/LoginModal";

const Login: React.FC = () => {
  const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] =
    useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <Container>
      <CreateAccountModal
        isOpen={isCreateAccountModalOpen}
        setIsOpen={setIsCreateAccountModalOpen}
      />
      <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />
      <BackgroundContainer>
        <img src={Background} alt="Background do twitter" />
      </BackgroundContainer>
      <RightContainer>
        <FaTwitter color="#D9D9D9" size="40px" />
        <h1 className="loginTitle">Acontecendo agora</h1>
        <h2 className="loginSubtitle">Inscreva-se no Twitter hoje mesmo.</h2>
        <Button>Inscrever-se com Google</Button>
        <Button>Inscrever-se com Apple</Button>
        <Button onClick={() => setIsCreateAccountModalOpen(true)}>
          Inscreva-se com número de celular o...
        </Button>
        <p className="loginPrivacy">
          Ao se inscrever, você concorda com os{" "}
          <span className="loginBlue"> Termos de Serviço</span> e a
          <span className="loginBlue"> Política de Privacidade</span>, incluindo
          o<span className="loginBlue"> Uso de Cookies</span>.
        </p>
        <h3 className="loginPhrase">
          Já tem uma conta?
          <span
            className="loginBlue"
            onClick={() => {
              setIsLoginModalOpen(true);
            }}
          >
            {" "}
            Entre
          </span>
        </h3>
      </RightContainer>
    </Container>
  );
};

export default Login;
