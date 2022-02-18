import styled from "styled-components";

export const Wrapper = styled.div`
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
    height: 30px;
  }
`;

export const MyLevelInfo = styled.div`
  width: 195px;

  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1px;
`;

export const Title = styled.h3`
  font-size: 14px;
`;

export const MyLevel = styled.p`
  font-size: 24px;
`;

export const MyScore = styled.span`
  font-size: 18px;
  margin: 5px 0px 0px 5px;
`;
