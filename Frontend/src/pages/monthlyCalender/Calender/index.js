import React, { useEffect, useState } from "react";
import {
  CalenderContainer,
  MonthlyRow,
  MonthlyCell,
  DayRow,
  DateCell,
} from "./style";

export function Calender({ date }) {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const [dates, setDates] = useState([]); // 달력의 행

  useEffect(() => {
    const { firstDate, lastDate } = getFirstAndLastDate();
    setDates(makeCalendar(firstDate, lastDate));
  }, [date]);

  const getFirstAndLastDate = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    let firstDate = new Date(year, month, 1);
    firstDate = new Date(year, month, -firstDate.getDay() + 1); //0
    let lastDate = new Date(year, month + 1, 0);
    lastDate = new Date(year, month + 1, 6 - lastDate.getDay()); //6
    return { firstDate: firstDate, lastDate: lastDate };
  };

  const makeCalendar = (firstDate, lastDate) => {
    let newDates = [];
    let index = 0;
    const firstDateYear = firstDate.getFullYear();
    const firstDateMonth = firstDate.getMonth() + 1;
    const firstDateDay = firstDate.getDate();
    let firstDateMonthLastDay = new Date(firstDateYear, firstDateMonth, 0);
    const lasDateMonth = lastDate.getMonth() + 1;
    const lastDateDate = lastDate.getDate();

    let tempDate = {
      year: firstDateYear,
      month: firstDateMonth,
      date: firstDateDay,
    };

    if (firstDateMonthLastDay === firstDateDay) {
      if (firstDateMonth === 12) {
        tempDate = { year: firstDateYear + 1, month: 1, date: 1 };
      } else {
        tempDate = { year: firstDateYear, month: tempDate.month + 1, date: 1 };
      }
      firstDateMonthLastDay = new Date(tempDate.year, tempDate.month - 1, 0);
    }

    while (tempDate.month !== lasDateMonth || tempDate.date !== lastDateDate) {
      if (index % 7 === 0) newDates[parseInt(index / 7)] = [];
      newDates[parseInt(index / 7)].push(tempDate);
      if (tempDate.date === firstDateMonthLastDay.getDate()) {
        if (tempDate.month === 12) {
          tempDate = { year: firstDateYear + 1, month: 1, date: 1 };
        } else {
          tempDate = {
            year: tempDate.year,
            month: tempDate.month + 1,
            date: 1,
          };
        }

        firstDateMonthLastDay = new Date(tempDate.year, tempDate.month, 0);
      } else {
        tempDate = {
          year: tempDate.year,
          month: tempDate.month,
          date: tempDate.date + 1,
        };
      }
      index++;
    }

    newDates[parseInt(index / 7)].push(tempDate);
    return newDates;
  };

  return (
    <div>
      <CalenderContainer>
        <DayRow>
          {days.map((day, idx) => (
            <div key={`${day}-${idx}-day`}>{day}</div>
          ))}
        </DayRow>
        {dates.map((oneWeek, idx) => (
          <MonthlyRow key={`${oneWeek}-${idx}-monthly-row`}>
            {oneWeek.map((perDate) => (
              <MonthlyCell
                key={`${idx}-${perDate.date}-${perDate.month}-monthly-cell`}
              >
                <DateCell
                  view={perDate.month === date.getMonth() + 1 && true}
                  key={`${
                    perDate.date + idx + perDate.month + perDate.year
                  }-${idx}-date-cell`}
                >
                  {perDate.date}
                </DateCell>
              </MonthlyCell>
            ))}
          </MonthlyRow>
        ))}
      </CalenderContainer>

      <div></div>
    </div>
  );
}
