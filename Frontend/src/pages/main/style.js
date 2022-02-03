import styled from "styled-components";

export const Container = styled.div`
  margin-top: 89px;
  padding: 0 25px;
`;

export const TodaysCommitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TodaysCommit = styled.h1`
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  color: ${(props) => props.theme.darkGray};
  padding-bottom: 15px;
`;

export const TodaysCommitCount = styled.span`
  font-size: 30px;
  line-height: 33px;
  text-align: center;
  color: #66a97a;
`;

export const FramePictureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
