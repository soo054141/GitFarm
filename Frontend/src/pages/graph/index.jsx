import React, { useState } from "react";
import DateController from "@/components/DateController";
import PieChartComponent from "./PieChart";
import LineGraph from "./LineGraph";
import * as Graphs from "./style";
import useUsersReposLanguage from "../../hooks/useUsersReposLanguage";
import useCommitsPerMonth from "../../hooks/useCommitsPerMonth";

function Graph() {
  const [date, setDate] = useState(new Date());
  const [reposLanguage, loading] = useUsersReposLanguage();
  const [commitData, commitsLoading] = useCommitsPerMonth();

  const goToday = () => {
    setDate(new Date());
  };

  return (
    <Graphs.Container>
      <Graphs.DateControllerWrapper>
        <DateController date={date} goToday={goToday} month={false} />
      </Graphs.DateControllerWrapper>
      <Graphs.ResponsiveDiv>
        <LineGraph commitData={commitData} commitsLoading={commitsLoading} />
        <PieChartComponent reposLanguage={reposLanguage} loading={loading} />
      </Graphs.ResponsiveDiv>
    </Graphs.Container>
  );
}

export default Graph;
