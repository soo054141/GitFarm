import React, { useEffect, useState } from "react";
import DateController from "@/components/DateController";
import * as api from "@/api";
import { toDay } from "@/utils/graph";
import PieChartComponent from "./PieChart";
import LineGraph from "./LineGraph";
import * as Graphs from "./style";

function Graph() {
  const [date, setDate] = useState(toDay);
  const [reposLanguage, setReposLanguage] = useState();
  const [loading, setLoading] = useState(false);

  const goToday = () => {
    setDate(toDay);
  };

  const getUsersReposLanguage = async () => {
    setLoading(true);

    const res = await api.getReposLanguage();
    if (res.success) {
      setReposLanguage(res.languages);
    } else {
      setReposLanguage([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUsersReposLanguage();
  }, []);

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
