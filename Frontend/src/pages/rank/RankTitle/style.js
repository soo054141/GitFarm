import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;

  p {
    font-size: 18px;
    font-weight: bold;
    line-height: 33px;
    text-align: center;
    color: ${(props) => props.theme.darkGray};
    padding-bottom: 1px;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme.mainColor};
    line-height: 30px;
  }
`;
