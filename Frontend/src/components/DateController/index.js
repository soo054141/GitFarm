import React from "react";
import * as Controller from "./style";
import LeftArrow from "../../assets/icon/left-arrow.svg";
import RightArrow from "../../assets/icon/right-arrow.svg";

export function DateController({ date, clickLeft, clickRight, goToday }) {
  return (
    <Controller.Container>
      <Controller.ArrowWrapper onClick={clickLeft}>
        <LeftArrow />
      </Controller.ArrowWrapper>
      <Controller.DateText onClick={goToday}>
        {date.getFullYear()}년
        {date.getMonth() + 1 && `${date.getMonth() + 1}월`}
      </Controller.DateText>
      <Controller.ArrowWrapper onClick={clickRight}>
        <RightArrow />
      </Controller.ArrowWrapper>
    </Controller.Container>
  );
}
