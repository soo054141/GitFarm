import styled from "styled-components";

export const Container = styled.div`
  margin-top: 89px;
  padding: 0 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TodaysCommit = styled.h1`
  font-size: 18px;
  line-height: 33px;
  text-align: center;
  color: ${(props) => props.theme.darkGray};
  padding-bottom: 1px;
`;

export const TodaysCommitCount = styled.span`
  font-size: 14px;
  line-height: 33px;
  text-align: center;
  color: ${(props) => props.theme.lightGray};
  padding-bottom: 10px;
`;
