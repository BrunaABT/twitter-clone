import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  background-color: rgba(167, 185, 198, 0.35);
  height: 100vh;
  width: 100vw;
`;

export const CreateAccount = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 598px;
  height: 647px;
  background-color: ${(props) => props.theme.color.black};
  border-radius: 20px;
`;
