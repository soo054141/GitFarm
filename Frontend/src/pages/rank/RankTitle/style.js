import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;

  p {
    font-size: 18px;
    color: ${(props) => props.theme.darkGray};
    line-height: 23px;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.mainColor};
    line-height: 30px;
  }
`;
