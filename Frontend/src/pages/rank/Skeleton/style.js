/* eslint-disable*/
import styled from "styled-components";

export const Container = styled.div`
  width: 349px;
  margin-top: 32px;
  padding: 17px 35px;
  border-radius: 10px;
  background: #ffffff;
  position: relative;

  @media ${({ theme }) => theme.device.laptop} {
    width: 430px;
  }
`;
