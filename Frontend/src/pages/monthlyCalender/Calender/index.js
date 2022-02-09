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
    let tempDate = new Date(firstDate);
    let newDates = [];
    let index = 0;
    while (
      tempDate.getMonth() !== lastDate.getMonth() ||
      tempDate.getDate() !== lastDate.getDate()
    ) {
      if (index % 7 === 0) newDates[parseInt(index / 7)] = [];
      newDates[parseInt(index / 7)].push(tempDate);
      tempDate = new Date(
        tempDate.getFullYear(),
        tempDate.getMonth(),
        tempDate.getDate() + 1,
      );
      index++;
    }
    newDates[parseInt(index / 7)].push(tempDate); // 달력의 시작이 1일이고, 전 달이 30일로 끝나는 날 때문에 따로 배치
    return newDates;
  };
  console.log(date.getMonth());
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
                key={`${idx}-${perDate.getDate()}-${perDate.getMonth()}-monthly-cell`}
              >
                {perDate.getMonth() === date.getMonth() ? (
                  <DateCell
                    view
                    key={`${
                      perDate.getDate() +
                      idx +
                      perDate.getMonth() +
                      perDate.getFullYear()
                    }-${idx}-date-cell`}
                  >
                    {perDate.getDate()}
                  </DateCell>
                ) : (
                  <DateCell
                    key={`${
                      perDate.getDate() +
                      perDate.getMonth() -
                      perDate.getFullYear()
                    }-${idx}-date-cell`}
                  >
                    {perDate.getDate()}
                  </DateCell>
                )}
              </MonthlyCell>
            ))}
          </MonthlyRow>
        ))}
      </CalenderContainer>

      <div></div>
    </div>
  );
}
