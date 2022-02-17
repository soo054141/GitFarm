/* eslint-disable */
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 170px;
  color: ${(props) => props.theme.darkGray};
`;

export const DateControllerWrapper = styled.div`
  height: 20px;
`;

export const ResponsiveDiv = styled.div`
  @media ${({ theme }) => theme.device.laptop} {
    display: flex;
    align-items: center;
    margin-top: 25px;
  }
`;
