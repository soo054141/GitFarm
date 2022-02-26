import React, { useState } from "react";
import DateController from "@/components/DateController";
import PieChartComponent from "./PieChart";
import LineGraph from "./LineGraph";
import * as Graphs from "./style";
import useUsersReposLanguage from "./useUsersReposLanguage";

function Graph() {
  const [date, setDate] = useState(new Date());
  const [reposLanguage, loading] = useUsersReposLanguage();

  const goToday = () => {
    setDate(new Date());
  };

  return (
    <Graphs.Container>
      <Graphs.DateControllerWrapper>
        <DateController date={date} goToday={goToday} month={false} />
      </Graphs.DateControllerWrapper>
      <Graphs.ResponsiveDiv>
        <LineGraph date={date} />
        <PieChartComponent reposLanguage={reposLanguage} loading={loading} />
      </Graphs.ResponsiveDiv>
    </Graphs.Container>
  );
}

export default Graph;
