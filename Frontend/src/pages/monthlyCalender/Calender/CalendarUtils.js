export const makeCalendar = (firstDate, lastDate) => {
  const newDates = [];
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
    if (index % 7 === 0) newDates[parseInt(index / 7, 10)] = [];
    newDates[parseInt(index / 7, 10)].push(tempDate);
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
    index += 1;
  }

  newDates[parseInt(index / 7, 10)].push(tempDate);
  return newDates;
};

export const getFirstAndLastDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  let firstDate = new Date(year, month, 1);
  firstDate = new Date(year, month, -firstDate.getDay() + 1); // 0
  let lastDate = new Date(year, month + 1, 0);
  lastDate = new Date(year, month + 1, 6 - lastDate.getDay()); // 6
  return { firstDate, lastDate };
};
