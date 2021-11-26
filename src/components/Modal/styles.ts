import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  background-color: rgba(167, 185, 198, 0.35);
  height: 100vh;
  width: 100vw;
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.color.black};
  border-radius: 20px;
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 32px;
  padding-bottom: 35px;
`;
