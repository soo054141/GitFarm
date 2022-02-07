import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;

  & > :nth-child(2) {
    margin-top: 32px;
  }
`;
