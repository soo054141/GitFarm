import React from "react";
import PropTypes from "prop-types";
import * as Controller from "./style";
import LeftArrow from "../../assets/icon/left-arrow.svg";
import RightArrow from "../../assets/icon/right-arrow.svg";

function DateController({ date, clickLeft, clickRight, goToday, month }) {
  return (
    <Controller.Container>
      <Controller.ArrowWrapper onClick={clickLeft}>
        <LeftArrow />
      </Controller.ArrowWrapper>
      <Controller.TextWrapper>
        <Controller.DateText onClick={goToday}>
          {date.getFullYear()}년 {month && `${date.getMonth() + 1}월`}{" "}
        </Controller.DateText>
      </Controller.TextWrapper>

      <Controller.ArrowWrapper onClick={clickRight}>
        <RightArrow />
      </Controller.ArrowWrapper>
    </Controller.Container>
  );
}
DateController.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  clickLeft: PropTypes.number.isRequired,
  clickRight: PropTypes.number.isRequired,
  goToday: PropTypes.instanceOf(Date).isRequired,
  month: PropTypes.instanceOf(Date).isRequired,
};
export default DateController;
