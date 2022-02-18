import styled from "styled-components";

export const Wrapper = styled.div`
  width: 350px;
  padding: 23px;
  border-radius: 10px;
  background-color: #ffffff;

  h1 {
    font-size: 18px;
    color: ${(props) => props.theme.lightGray};
  }

  @media ${({ theme }) => theme.device.laptop} {
    width: 850px;
  }
`;

export const Content = styled.div`
  margin-top: 32px;
  cursor: pointer;

  h2 {
    font-size: 18px;
    color: ${(props) => props.theme.darkGray};
  }
`;
