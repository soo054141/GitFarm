import styled from "styled-components";

export const LevelWrapper = styled.div`
  margin-top: 23px;
  margin-left: 20px;
  display: flex;
  svg {
    width: 50px;
    height: 50px;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-top: 13px;
  }
`;
export const Explanation = styled.p`
  margin-top: 10px;
  margin-left: 20px;
  width: 200px;
  font-size: 11px;
  line-height: 16px;
  color: ${(props) => props.theme.darkGray};
`;
