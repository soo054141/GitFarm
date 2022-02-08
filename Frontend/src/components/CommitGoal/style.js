import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  height: 10px;
  width: 340px;
  height: 168px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  & > :nth-child(2) {
    margin-top: 10px;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.darkGray};
  margin-left: 26px;
  margin-top: 37px;
`;

export const Description = styled.p``;

export const IconWrapper = styled.div`
  position: absolute;
  left: 231px;
  top: 40px;
`;

export const GoalNum = styled.p`
  color: white;
  font-size: ${(props) => (props.length === 3 ? "33px" : "40px")};
  position: absolute;

  left: ${(props) =>
    props.length === 1
      ? "277px"
      : (props) => (props.length === 2 ? "268px" : "264px")};
  top: 75px;
`;
