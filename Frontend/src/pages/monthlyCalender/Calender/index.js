import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  CalenderContainer,
  MonthlyRow,
  MonthlyCell,
  DayRow,
  DateCell,
} from "./style";
import { makeCalendar, getFirstAndLastDate } from "./CalendarUtils";

function Calender({ date }) {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const [dates, setDates] = useState([]); // 달력의 행

  useEffect(() => {
    const { firstDate, lastDate } = getFirstAndLastDate(date);
    setDates(makeCalendar(firstDate, lastDate));
  }, [date]);

  return (
    <div>
      <CalenderContainer>
        <DayRow>
          {days.map((day) => (
            <div key={`${day}-day`}>{day}</div>
          ))}
        </DayRow>
        {dates.map((oneWeek) => (
          <MonthlyRow key={`${oneWeek}-monthly-row`}>
            {oneWeek.map((perDate) => (
              <MonthlyCell
                key={`${perDate.date}-${perDate.month}-monthly-cell`}
              >
                <DateCell
                  view={perDate.month === date.getMonth() + 1 && true}
                  key={`${
                    perDate.date + perDate.month + perDate.year
                  }-date-cell`}
                >
                  {perDate.date}
                </DateCell>
              </MonthlyCell>
            ))}
          </MonthlyRow>
        ))}
      </CalenderContainer>

      <div />
    </div>
  );
}

Calender.propTypes = {
  // TODO 고치기
  date: PropTypes.instanceOf(Date).isRequired,
};
export default Calender;
