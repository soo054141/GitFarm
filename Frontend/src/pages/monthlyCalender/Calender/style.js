import styled from "styled-components";

export const CalenderContainer = styled.div`
  width: 350px;
  min-height: 375px;
  background-color: white;
  border-radius: 10px;
`;
export const DayRow = styled.div`
  display: flex;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding-top: 30px;
  margin-bottom: 15px;
  div {
    text-align: center;
    color: ${(props) => props.theme.darkGray};
    font-size: 14px;
  }
`;

export const MonthlyRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  & > nth-child(1): {
    align="left"
  }
`;
export const stageFunc = (stageNum) => {
  const colors = [
    "white",
    "#D9F5E2",
    "#E5F1D4",
    "#B9E8C9",
    "#8ECFA5",
    "#649C81",
  ];

  return colors[stageNum];
};

export const MonthlyCell = styled.div`
  margin: 2px;
  height: 35px;
  width: 35px;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  border-radius: 50%;
  line-height: 20px;
  background-color: ${(props) =>
    !props.view ? "white" : stageFunc(props.stage)};
`;

export const DateCell = styled.p`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: 17px;
  ${(props) => !props.view && "display:none"};
  color: ${(props) =>
    props.stage === 4 || props.stage === 5 ? "#F6F9F0" : "#C2C2C2"};
`;
