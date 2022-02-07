import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 37px;
  }
`;

export const SubTitle = styled.span`
  font-size: 18px;
  color: ${(props) => props.textColor || "#595959"};
`;

export const Content = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.darkGray};
`;
