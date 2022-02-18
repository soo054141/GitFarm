import styled from "styled-components";

export const Wrapper = styled.div`
  width: 350px;

  @media ${({ theme }) => theme.device.laptop} {
    width: 850px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  line-height: 28px;

  span {
    font-size: 24px;
    color: ${(props) => props.theme.mainColor};
  }
`;
