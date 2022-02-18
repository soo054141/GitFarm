import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: space-between;
  cursor: ${({ setCursor }) => (setCursor ? "" : "pointer")};
`;

export const SubTitle = styled.span`
  font-size: 18px;
  color: ${(props) => props.textColor || "#595959"};
`;

export const Content = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.darkGray};
`;
