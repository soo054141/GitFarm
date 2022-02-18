/* eslint-disable */
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 74px;
  @media ${({ theme }) => theme.device.laptop} {
    margin-top: 117px;
  }
  & > :nth-child(2) {
    margin-top: 32px;
  }
`;
