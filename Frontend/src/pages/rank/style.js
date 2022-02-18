/* eslint-disable*/
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 117px;

  & > :nth-child(2) {
    margin-top: 32px;
  }
`;

export const ResponsiveDiv = styled.div`
  @media ${({ theme }) => theme.device.laptop} {
    display: flex;
    align-items: flex-start;
    margin-top: 30px;
  }
`;

export const ResponsivUserRankWrapper = styled.div`
  @media ${({ theme }) => theme.device.laptop} {
    margin-left: 150px;
  }
`;
