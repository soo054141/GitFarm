import React, { useState } from "react";
import { DateController } from "@/components/DateController";

import { Container } from "./style";
import { Calender } from "./Calender";

export function MonthlyCalender() {
  const [date, setDate] = useState(new Date());

  const clickLeft = () => {
    changeDate(-1);
  };
  const clickRight = () => {
    changeDate(1);
  };

  const changeDate = (value) => {
    let newDate = new Date(date.getFullYear(), date.getMonth() + value);
    setDate(newDate);
  };

  const goToday = () => {
    setDate(new Date());
  };
  return (
    <Container>
      <DateController
        date={date}
        clickLeft={clickLeft}
        clickRight={clickRight}
        goToday={goToday}
      />
      <Calender date={date} />
    </Container>
  );
}
