import styled from "styled-components";

interface IProps {
  width?: string;
  height?: string;
  isDisabled?: boolean;
}

const Button = styled.button<IProps>`
  background-color: ${(props) => props.theme.color.blue};
  border: none;
  border-radius: 53px;
  cursor: pointer;
  color: ${(props) => props.theme.color.white};
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  width: ${(props) => props.width || "105px"};
  height: ${(props) => props.height || "39px"};
  opacity: ${(props) => (props.isDisabled ? 0.3 : 1)};
  pointer-events: ${(props) => (props.isDisabled ? "none" : "all")};
`;

export default Button;
