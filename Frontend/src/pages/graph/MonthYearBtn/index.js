import React from "react";
import PropTypes from "prop-types";
import * as MonthYearBtns from "./style";

function MonthYearBtn({ isClick, handlYearBtn, handleMonthBtn }) {
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

MonthYearBtn.propTypes = {
  isClick: PropTypes.bool,
  handlYearBtn: PropTypes.func.isRequired,
  handleMonthBtn: PropTypes.func.isRequired,
};

MonthYearBtn.defaultProps = {
  isClick: true,
};

export default React.memo(MonthYearBtn);
