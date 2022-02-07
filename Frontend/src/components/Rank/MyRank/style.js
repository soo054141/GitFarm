import styled from "styled-components";

export const Container = styled.div`
  width: 349px;
  margin-top: 32px;
  padding: 22px 17px;
  background: #ffffff;
  border-radius: 10px;

  h1 {
    font-size: 14px;
    color: ${(props) => props.theme.darkGray};
  }
`;

export const MyRanking = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 210px 1fr;
  align-items: center;
  overflow-wrap: break-word;
`;

export const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #eefdc6;
  border-radius: 50px;
`;

export const Detail = styled.div``;

export const Id = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const Point = styled.div`
  font-size: 8px;
  margin-top: 5px;
  color: ${(props) => props.theme.lightGray};
`;

export const Ranking = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => props.theme.darkGray};
`;
