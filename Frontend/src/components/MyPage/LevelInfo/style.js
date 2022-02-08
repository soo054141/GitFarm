import styled from "styled-components";

export const Wrapper = styled.div`
  width: 350px;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

export const MyLevelIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  margin: 0 15px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 30px;
    height: 20px;
  }
`;

export const MyLevelInfo = styled.div`
  width: 195px;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 1px;
`;

export const Title = styled.h3`
  font-size: 14px;
`;

export const InfoIcon = styled.div`
  width: 14px;
  height: 14px;
  margin-left: 5px;
  background: #fcc5c5;
`;

export const MyLevel = styled.p`
  font-size: 24px;
`;

export const MyScore = styled.span`
  font-size: 18px;
  margin-left: 5px;
`;
