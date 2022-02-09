import styled from "styled-components";

export const CalenderContainer = styled.div`
  width: 350px;
  height: 326px;
  background-color: white;
  border-radius: 10px;
`;
export const DayRow = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding-top: 30px;
  margin-bottom: 20px;
  div {
    text-align: center;
    color: ${(props) => props.theme.darkGray};
    font-size: 14px;
  }
`;

export const MonthlyRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
export const MonthlyCell = styled.div`
  margin: 2px;
  height: 20px;
  width: 20px;
  margin: 0 auto;
  // border-radius: 20px;
  text-align: center;
  margin-top: 20px;
`;

export const DateCell = styled.p`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: 17px;
  ${(props) => !props.view && "display:none"};
  color: ${(props) => props.theme.lightGray};
`;
