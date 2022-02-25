import React from "react";
import PropTypes from "prop-types";
import * as Controller from "./style";
import PrevArrow from "../../assets/icon/left-arrow.svg";
import NextArrow from "../../assets/icon/right-arrow.svg";

function DateController({ date, goToday, month }) {
  return (
    <Controller.Container>
      {/* <Controller.ArrowWrapper>
        <PrevArrow />
      </Controller.ArrowWrapper> */}
      <Controller.TextWrapper>
        <Controller.DateText onClick={goToday}>
          {date.getFullYear()}년 {month && `${date.getMonth() + 1}월`}{" "}
        </Controller.DateText>
      </Controller.TextWrapper>
      {/* 
      <Controller.ArrowWrapper>
        <NextArrow />
      </Controller.ArrowWrapper> */}
    </Controller.Container>
  );
}
DateController.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  // PrevArrow: PropTypes.func.isRequired,
  // NextArrow: PropTypes.func.isRequired,
  goToday: PropTypes.func.isRequired,
  month: PropTypes.bool.isRequired,
};
export default DateController;
