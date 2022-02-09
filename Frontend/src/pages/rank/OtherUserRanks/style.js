import styled from "styled-components";

export const Container = styled.div`
  width: 349px;
  margin-top: 32px;
  padding: 28px 17px;
  border-radius: 10px;
  background: #ffffff;

  display: grid;
  grid-template-columns: 30px 60px 150px 50px;
  justify-content: center;
  align-items: center;
  overflow-wrap: break-word;
`;

export const Ranking = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => props.theme.darkGray};
`;

export const Detail = styled.div`
  margin-right: 20px;
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

export const newUser = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 10px;
  border-radius: 5px;
  text-align: center;
  background-color: rgba(106, 189, 140, 0.24);
  p {
    color: ${(props) => props.theme.lightGray};
  }

  span {
    color: ${(props) => props.theme.mainColor};
  }
`;
