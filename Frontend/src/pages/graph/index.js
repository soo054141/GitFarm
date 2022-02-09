import React, { useState } from "react";
import { Container } from "@/components/Container/style";
import { DateController } from "@/components/DateController";
import { LineGraph } from "./LineGraph";
import { MonthYearBtn } from "./MonthYearBtn";
import { PieChartComponent } from "./PieChart";

export function Graph() {
  const [clickButton, setClickButton] = useState(true);
  const [graphTitle, setGraphTitle] = useState("월간");
  const [checkMonth, setCheckMonth] = useState(false);

  const handleClickButton = () => {
    setClickButton((current) => !current);
    setCheckMonth((current) => !current);
    setGraphTitle(clickButton ? "연간" : "월간");
  };

  return (
    <Container>
      {checkMonth && <DateController></DateController>}
      <MonthYearBtn isClick={clickButton} onClick={handleClickButton} />
      <LineGraph graphTitle={graphTitle} />
      <PieChartComponent />
    </Container>
  );
}
