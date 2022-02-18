import styled from "styled-components";

export const Wrapper = styled.div`
  width: 350px;
  height: 77px;
  padding: 23px;
  border-radius: 10px;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Divider = styled.div`
  width: 40px;
  border-top: 1px solid rgba(119, 119, 119, 0.4);
  transform: rotate(90deg);
`;

export const Counter = styled.div`
  width: 123px;
`;

export const Title = styled.h6`
  font-size: 18px;
`;

export const Count = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.mainColor};
  margin-top: 3px;
`;
