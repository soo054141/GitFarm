import React, { useEffect, useState } from "react";
import { Container } from "@/components/Container/style";
import DateController from "@/components/DateController";
import * as api from "@/api";
import { toDay } from "@/utils/graph";
import PieChartComponent from "./PieChart";
import LineGraph from "./LineGraph";
import { DateControllerWrapper } from "./style";

function Graph() {
  const [date, setDate] = useState(toDay);
  const [reposLanguage, setReposLanguage] = useState();

  const goToday = () => {
    setDate(toDay);
  };

  const getUsersReposLanguage = async () => {
    const res = await api.getReposLanguage();
    if (res.success) {
      setReposLanguage(res.languages);
    }
  };

  useEffect(() => {
    getUsersReposLanguage();
  }, []);

  return (
    <Container>
      <DateControllerWrapper>
        <DateController date={date} goToday={goToday} month={false} />
      </DateControllerWrapper>
      <LineGraph date={date} />
      <PieChartComponent reposLanguage={reposLanguage} />
    </Container>
  );
}

export default Graph;
