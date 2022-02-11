/* eslint-disable */
import styled from "styled-components";

export const ButtonWrapper = styled.div`
  height: 35px;
  line-height: 35px;
  background-color: ${(props) =>
    props.color === "gray"
      ? props.theme.superLightGray
      : props.theme.mainColorLight};
  color: ${(props) =>
    props.color === "gray" ? props.theme.lightGray : "white"};
  width: ${(props) => (props.long ? "87.14%" : "40.51%")};
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`;
