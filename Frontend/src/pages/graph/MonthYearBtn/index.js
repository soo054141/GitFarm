import React from "react";
import * as MonthYearBtns from "./style";

export function MonthYearBtn({ isClick, onClick }) {
  return (
    <MonthYearBtns.Container>
      <MonthYearBtns.MonthWrapper isClick={isClick} onClick={onClick}>
        월간
      </MonthYearBtns.MonthWrapper>
      <MonthYearBtns.YearWrapper isClick={!isClick} onClick={onClick}>
        연간
      </MonthYearBtns.YearWrapper>
    </MonthYearBtns.Container>
  );
}
