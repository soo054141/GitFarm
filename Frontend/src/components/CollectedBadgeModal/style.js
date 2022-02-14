/* eslint-disable */
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    margin-top: 20px;
    width: 60px;
    margin-bottom: 20px;
  }
  p {
    text-align: center;
    margin-bottom: 20px;
    margin-left: 0px;
  }
`;

export const Body = styled.p`
  color: ${(props) => props.theme.lightGray};
  line-height: 18px;
  font-size: 16px;
  margin-left: 5px;
`;
