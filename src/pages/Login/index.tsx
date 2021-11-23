import { Button } from "./styles";
import { Container } from "./styles";
import { BackgroundContainer } from "./styles";
import { RightContainer } from "./styles";

import Background from "../../assets/images/login-bg.png";

import { FaTwitter } from "react-icons/fa";

const Login: React.FC = () => {
  return (
    <Container>
      <BackgroundContainer>
        <img src={Background} alt="Background do twitter" />
      </BackgroundContainer>
      <RightContainer>
        <FaTwitter color="#D9D9D9" size="40px" />
        <h1 className="loginTitle">Acontecendo agora</h1>
        <h2 className="loginSubtitle">Inscreva-se no Twitter hoje mesmo.</h2>
        <Button>Inscrever-se com Google</Button>
        <Button>Inscrever-se com Apple</Button>
        <Button>Inscreva-se com número de celular o...</Button>
        <p className="loginPrivacy">
          Ao se inscrever, você concorda com os{" "}
          <span className="loginBlue"> Termos de Serviço</span> e a
          <span className="loginBlue"> Política de Privacidade</span>, incluindo
          o<span className="loginBlue"> Uso de Cookies</span>.
        </p>
        <h3 className="loginPhrase">
          Já tem uma conta?
          <span className="loginBlue"> Entre</span>
        </h3>
      </RightContainer>
    </Container>
  );
};

export default Login;
