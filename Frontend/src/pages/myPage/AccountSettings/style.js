import styled from "styled-components";

export const Wrapper = styled.div`
  width: 350px;
  padding: 47px 10px 16px 10px;
  border-bottom: 1px solid rgba(119, 119, 119, 0.4);

  h1 {
    font-size: 18px;
    color: ${(props) => props.theme.lightGray};
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  cursor: pointer;

  h2 {
    font-size: 18px;
    color: ${(props) => props.theme.darkGray};
  }
`;

export const ArrowWrapper = styled.div`
  svg {
    width: 7px;
    height: 100%;
  }
`;
