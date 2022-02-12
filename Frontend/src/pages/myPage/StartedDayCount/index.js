import React from "react";
import PropTypes from "prop-types";
import * as StartedDay from "./style";

function StartedDayCount({ memberDate }) {
  return (
    <StartedDay.Wrapper>
      <StartedDay.Title>
        깃팜을 시작한 지<br />
        <span>{memberDate}일째</span> 입니다.
      </StartedDay.Title>
    </StartedDay.Wrapper>
  );
}

StartedDayCount.defaultProps = {
  memberDate: 0,
};

StartedDayCount.propTypes = {
  memberDate: PropTypes.number,
};

export default StartedDayCount;
