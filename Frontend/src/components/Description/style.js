import styled from "styled-components";

export const Text = styled.p`
  color: ${(props) => props.theme.lightGray};
  margin-left: 26px;
  line-height: 18px;
  font-size: ${(props) => (props.big ? "16px" : "12px")};
`;
