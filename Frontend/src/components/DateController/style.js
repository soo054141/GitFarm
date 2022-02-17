import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const ArrowWrapper = styled.button`
  svg {
    width: 7px;
    height: 100%;
    display: none;
  }
`;
export const TextWrapper = styled.div`
  width: 250px;
`;
export const DateText = styled.p`
  color: ${(props) => props.theme.darkGray};
  font-size: 18px;
  margin: 0px 54px;
  font-weight: 600;
  height: 20px;
  line-height: 20px;
  text-align: center;
`;
