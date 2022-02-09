import React, { useState } from "react";
import { Container } from "@/components/Container/style";
import { DateController } from "@/components/DateController";
import { LineGraph } from "./LineGraph";
import { MonthYearBtn } from "./MonthYearBtn";
import { PieChartComponent } from "./PieChart";

export function Graph() {
  const monthButton = true;
  const yearButton = false;

  const [clickButtonColor, setClickButtonColor] = useState(true);
  const [checkMonth, setCheckMonth] = useState(false);
  const [graphTitle, setGraphTitle] = useState("월간");

  const handleMonthBtn = () => {
    if (monthButton) {
      setClickButtonColor(monthButton);
      setCheckMonth(false);
      setGraphTitle(checkMonth ? "월간" : "년간");
    }
  };
  const handlYearBtn = () => {
    if (!yearButton) {
      setClickButtonColor(!monthButton);
      setCheckMonth(true);
      setGraphTitle(checkMonth ? "월간" : "년간");
    }
  };

  return (
    <Container>
      {checkMonth && <DateController></DateController>}
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
