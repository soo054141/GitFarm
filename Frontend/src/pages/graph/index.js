import React, { useCallback, useState } from "react";
import { Container } from "@/components/Container/style";
import { DateController } from "@/components/DateController";
import { LineGraph } from "./LineGraph";
import MonthYearBtn from "./MonthYearBtn";
import PieChartComponent from "./PieChart";
import { DateControllerWrapper } from "./style";
export function Graph() {
  const monthButton = true;
  const yearButton = false;
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
    let newDate = new Date(date.getFullYear() + value, date.getMonth());
    setDate(newDate);
  };

  const goToday = () => {
    setDate(toDay);
  };
  const [clickButtonColor, setClickButtonColor] = useState(true);
  const [checkMonth, setCheckMonth] = useState(false);
  const [graphTitle, setGraphTitle] = useState("월간");

  const handleMonthBtn = useCallback(() => {
    if (monthButton) {
      setClickButtonColor(monthButton);
      setCheckMonth(false);
      setGraphTitle(checkMonth ? "월간" : "년간");
    }
  }, [graphTitle]);
  const handlYearBtn = useCallback(() => {
    if (!yearButton) {
      setClickButtonColor(!monthButton);
      setCheckMonth(true);
      setGraphTitle(checkMonth ? "월간" : "년간");
    }
  }, [graphTitle]);

  return (
    <Container>
      <DateControllerWrapper>
        {!checkMonth && (
          <DateController
            date={date}
            clickLeft={clickLeft}
            clickRight={clickRight}
            goToday={goToday}
            month={false}
          />
        )}
      </DateControllerWrapper>

      <MonthYearBtn
        isClick={clickButtonColor}
        handlYearBtn={handlYearBtn}
        handleMonthBtn={handleMonthBtn}
      />
      <LineGraph graphTitle={graphTitle} />
      <PieChartComponent />
    </Container>
  );
}
