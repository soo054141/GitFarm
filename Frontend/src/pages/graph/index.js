import React, { useState } from "react";
import { Container } from "@/components/Container/style";
import { DateController } from "@/components/DateController";
import { MonthYearBtn } from "./MonthYearBtn";
import { PieChartComponent } from "./PieChart";

export function Graph() {
  const [clickButton, setClickButton] = useState(true);

  const handleClickButton = () => {
    setClickButton((current) => !current);
  };
  return (
    <Container>
      <DateController></DateController>
      <MonthYearBtn isClick={clickButton} onClick={handleClickButton} />
      <PieChartComponent />
    </Container>
  );
}
