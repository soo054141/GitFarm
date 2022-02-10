import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 350px;
  height: 29px;
  margin-top: 24px;

  & > div {
    border-radius: 5px;
  }
`;

export const MonthWrapper = styled.div`
  flex-grow: 1;
  background-color: ${({ isClick }) => (isClick ? "white" : "#F1F2F5")};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: ${({ isClick }) => (isClick ? "#6ABD8C" : "#595959")};
`;

export const YearWrapper = styled.div`
  flex-grow: 1;
  background-color: ${({ isClick }) => (isClick ? "white" : "#F1F2F5")};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: ${({ isClick }) => (isClick ? "#6ABD8C" : "#595959")};
`;
