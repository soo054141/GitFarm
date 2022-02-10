import React, { useState } from "react";
import { DateController } from "@/components/DateController";

import { Container } from "./style";
import { Calender } from "./Calender";

export function MonthlyCalender() {
  const toDay = new Date();
  const [date, setDate] = useState(toDay);

  const clickLeft = () => {
    if (date.getFullYear() - 2000 <= 0) return;
    changeDate(-1);
  };
  const clickRight = () => {
    if (toDay.getFullYear() - date.getFullYear() <= 0) return;

    changeDate(1);
  };

  const changeDate = (value) => {
    let newDate = new Date(date.getFullYear(), date.getMonth() + value);
    setDate(newDate);
  };

  const goToday = () => {
    setDate(toDay);
  };
  return (
    <Container>
      <DateController
        date={date}
        clickLeft={clickLeft}
        clickRight={clickRight}
        goToday={goToday}
        month={true}
      />
      <Calender date={date} />
    </Container>
  );
}
