import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import * as api from "@/api";
import ColorGuide from "./ColorGuide";
import {
  CalenderContainer,
  MonthlyRow,
  MonthlyCell,
  DayRow,
  DateCell,
} from "./style";
import {
  makeCalendar,
  getFirstAndLastDate,
  matchDateCommit,
  stageCalc,
} from "./CalendarUtils";

function Calender({ date }) {
  const [loading, setLoading] = useState(false);
  const [commitCountsPerDate, setCommitCountsPerDate] = useState([]);
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const [dates, setDates] = useState([]);
  const currentMonth = date.getMonth();
  const { firstDate, lastDate } = getFirstAndLastDate(date);

  const getCommitMonthlyCount = async (setFunc) => {
    setLoading(true);
    const commitMonthData = await api.getCommitMonthly();
    if (commitMonthData.success) {
      setFunc(commitMonthData.commitPerMonth);
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    getCommitMonthlyCount(setCommitCountsPerDate);
    setDates(makeCalendar(firstDate, lastDate, commitCountsPerDate));
  }, [date]);

  useLayoutEffect(() => {
    matchDateCommit(firstDate, commitCountsPerDate, setCommitCountsPerDate);
  }, [loading]);

  return (
    <div>
      <CalenderContainer>
        <DayRow>
          {days.map((day) => (
            <div key={`${day}-day`}>{day}</div>
          ))}
        </DayRow>

        {!loading ? (
          dates.map((oneWeek, idx2) => (
            <MonthlyRow
              key={`${oneWeek[idx2].date}-${oneWeek[idx2].month}}-monthly-row`}
            >
              {oneWeek.map((perDate, idx) => {
                const weekNum3 = idx2 * 7;
                return (
                  <MonthlyCell
                    view={perDate.month === currentMonth + 1 && true}
                    key={`${perDate.date}-${perDate.month}-monthly-cell`}
                    stage={stageCalc(
                      commitCountsPerDate[parseInt(idx + weekNum3, 10)],
                    )}
                  >
                    <DateCell
                      view={perDate.month === currentMonth + 1 && true}
                      key={`${
                        perDate.date + perDate.month + perDate.year
                      }-date-cell`}
                      stage={stageCalc(
                        commitCountsPerDate[parseInt(idx + weekNum3, 10)],
                      )}
                    >
                      {perDate.date}
                    </DateCell>
                  </MonthlyCell>
                );
              })}
            </MonthlyRow>
          ))
        ) : (
          <div>로딩중...</div>
        )}
      </CalenderContainer>

      <ColorGuide />
    </div>
  );
}

Calender.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Calender;
