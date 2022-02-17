import styled from "styled-components";

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
