import { Background } from "./styles";
import { CreateAccount } from "./styles";

const Modal: React.FC = ({ children }) => {
  return (
    <Background>
      <CreateAccount>{children}</CreateAccount>
    </Background>
  );
};

export default Modal;
