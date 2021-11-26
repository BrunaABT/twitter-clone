import styled from "styled-components";

const Input = styled.input`
  outline: none;
  background: none;
  border: 1px solid rgba(167, 185, 198, 0.3);
  color: rgba(167, 185, 198, 0.45);
  border-radius: 4px;
  padding: 20px 12px;

  &::placeholder {
    color: rgba(167, 185, 198, 0.45);
    transform: translate3d(3, 0, 0);
    transition: all 0.2s ease-in-out;
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.color.blue};
    color: #a7b9c6;
  }
`;

export default Input;
