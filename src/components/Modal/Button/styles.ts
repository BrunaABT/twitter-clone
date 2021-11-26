import styled from "styled-components";
import { IProps } from "./";

export const StyledButton = styled.button<IProps>`
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
`;
