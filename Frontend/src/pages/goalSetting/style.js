/* eslint-disable */
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 74px;
  color: ${(props) => props.theme.darkGray};
  @media ${({ theme }) => theme.device.laptop} {
    display: flex;
    flex-direction: column;
    margin-top: 117px;
  }

`;

export const TitleText = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: ${(props) => props.theme.darkGray};
  text-align: center;
  margin-bottom: 33px;

  & > :nth-child(2) {
    margin-top: 20px;
    width: 260px;
    border: 3px solid black;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.device.laptop} {
    width: 850px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 100px;
  }
`;
