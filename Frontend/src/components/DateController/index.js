import React from "react";
import * as Controller from "./style";
import LeftArrow from "../../assets/icon/left-arrow.svg";
import RightArrow from "../../assets/icon/right-arrow.svg";

DateController.defaultProps = {
  year: 2020,
  month: 4,
};

export function DateController({ year, month }) {
  return (
    <Controller.Container>
      <Controller.ArrowWrapper>
        <LeftArrow />
      </Controller.ArrowWrapper>
      <Controller.DateText>
        {year}년 {month && `${month}월`}
      </Controller.DateText>
      <Controller.ArrowWrapper>
        <RightArrow />
      </Controller.ArrowWrapper>
    </Controller.Container>
  );
}
