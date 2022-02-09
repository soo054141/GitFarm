import React from "react";
import * as MonthYearBtns from "./style";

export function MonthYearBtn({ isClick, handlYearBtn, handleMonthBtn }) {
  return (
    <MonthYearBtns.Container>
      <MonthYearBtns.MonthWrapper isClick={isClick} onClick={handleMonthBtn}>
        월간
      </MonthYearBtns.MonthWrapper>
      <MonthYearBtns.YearWrapper isClick={!isClick} onClick={handlYearBtn}>
        연간
      </MonthYearBtns.YearWrapper>
    </MonthYearBtns.Container>
  );
}
