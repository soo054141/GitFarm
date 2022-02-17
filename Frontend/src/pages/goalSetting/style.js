/* eslint-disable */
import styled from "styled-components";

export const TitleText = styled.div`
  font-size: 18px;

  margin-bottom: 33px;
  color: ${(props) => props.theme.darkGray};
  &:hover {
    box-shodow: ;
  }
  & > :nth-child(2) {
    margin-top: 20px;
    width: 260px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 117px;
  color: ${(props) => props.theme.darkGray};
  & > :nth-child(n + 2) {
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.laptop} {
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    & > :nth-child(n + 2) {
      margin-top: 0;
    }
    & > :nth-child(2) {
      margin-top: 0;
      margin-left: 80px;
    }
  }
`;
