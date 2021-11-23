import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const BackgroundContainer = styled.div`
  img {
    height: 100vh;
    width: 50vw;
    object-fit: cover;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 177px;
  margin-left: 30px;
  color: black;

  .loginTitle {
    font-size: 64px;
    font-weight: bold;
    line-height: 83px;
    letter-spacing: -0.8px;
    margin-top: 60px;
    margin-bottom: 32px;
  }

  .loginSubtitle {
    font-weight: bold;
    font-size: 31px;
    line-height: 40px;
    margin-bottom: 32px;
  }

  .loginPrivacy {
    font-size: 11px;
    line-height: 13px;
    margin-bottom: 33px;
  }

  .loginPhrase {
    font-size: 16px;
    line-height: 19px;
  }

  .loginBlue {
    color: ${(props) => props.theme.color.blue};
    cursor: pointer;
  }
`;

export const Button = styled.button`
  background-color: #fff;
  height: 49px;
  width: 381px;
  left: 0px;
  top: 0px;
  border-radius: 70px;
  border: none;
  padding: 14px, 92px, 14px, 92px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  cursor: pointer;
`;
