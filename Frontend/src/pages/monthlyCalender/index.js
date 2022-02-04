import React from "react";
import DateController from "../../components/DateController";
import CommitDetails from "../../components/CommitDetails";

import { Container } from "./style";
import Calender from "../../components/Calender";

function MonthlyCalender(){
  return (
    <Container>
      <DateController />
      <Calender />
      <CommitDetails />
    </Container>
  );
};

export default MonthlyCalender;
