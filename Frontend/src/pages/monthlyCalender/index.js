import React from "react";
import { DateController } from "@/components/DateController";
import { CommitDetails } from "@/pages/main/CommitDetails";

import { Container } from "./style";
import { Calender } from "./Calender";

export function MonthlyCalender() {
  return (
    <Container>
      <DateController />
      <Calender />
      <CommitDetails />
    </Container>
  );
}
