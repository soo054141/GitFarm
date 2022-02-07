import styled from "styled-components";

export const Container = styled.div`
  width: 349px;
  margin-top: 32px;
  display: flex;
  align-items: center;
  padding: 28px 17px;
  background: #ffffff;
  border-radius: 10px;

  h1 {
    font-size: 16px;
    color: ${(props) => props.theme.darkGray};
  }
`;

export const Ranking = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => props.theme.darkGray};
`;

export const Detail = styled.div`
  margin-left: 17px;
`;

export const Id = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const Point = styled.div`
  font-size: 8px;
  margin-top: 5px;
  color: ${(props) => props.theme.lightGray};
`;
