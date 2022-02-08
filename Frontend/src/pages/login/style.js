import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  color: ${(props) => props.theme.darkGray};
`;

export const Title = styled.header`
  width: 100%;
  padding-top: 90px;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;

export const Logo = styled.div`
  width: 250px;
  height: 250px;
  margin: 80px 0px;
  border-radius: 50%;
  background: white;

  svg {
    margin: -5px 0px 0px 8px;
  }
`;

export const LoginBtn = styled.footer`
  width: 250px;
  padding: 15px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: white;
  font-size: 16px;
  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
  }
`;
