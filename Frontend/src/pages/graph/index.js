import React, { useCallback, useEffect, useState } from "react";
import { Container } from "@/components/Container/style";
import DateController from "@/components/DateController";
import * as api from "@/api";
import { toDay } from "@/utils/graph";
import MonthYearBtn from "./MonthYearBtn";
import PieChartComponent from "./PieChart";
import LineGraph from "./LineGraph";
import { DateControllerWrapper } from "./style";

function Graph() {
  const [date, setDate] = useState(toDay);
  const [clickButtonColor, setClickButtonColor] = useState(true);
  const [checkMonth, setCheckMonth] = useState(false);
  const [graphTitle, setGraphTitle] = useState("월간");
  const [reposLanguage, setReposLanguage] = useState();

  const changeDate = (value) => {
    const newDate = new Date(date.getFullYear() + value, date.getMonth());
    setDate(newDate);
  };

  const clickLeft = () => {
    if (date.getFullYear() - 2000 <= 0) return;
    changeDate(-1);
  };

  const clickRight = () => {
    if (toDay.getFullYear() - date.getFullYear() <= 0) return;
    changeDate(1);
  };

  const goToday = () => {
    setDate(toDay);
  };

  const handleMonthBtn = useCallback(() => {
    setClickButtonColor(true);
    setCheckMonth(false);
    setGraphTitle("월간");
  }, [graphTitle]);

  const handlYearBtn = useCallback(() => {
    setClickButtonColor(false);
    setCheckMonth(true);
    setGraphTitle("년간");
  }, [graphTitle]);

  const getUsersReposLanguage = async () => {
    const res = await api.getReposLanguage();
    if (res.success) {
      setReposLanguage(res.data);
    }
  };

  useEffect(() => {
    getUsersReposLanguage();
  }, []);

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
      <LineGraph graphTitle={graphTitle} date={date} clickYear={checkMonth} />
      <PieChartComponent reposLanguage={reposLanguage} />
    </Container>
  );
}

export default Graph;
