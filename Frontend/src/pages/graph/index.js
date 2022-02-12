import React, { useCallback, useEffect, useState, Suspense } from "react";
import { Container } from "@/components/Container/style";
import DateController from "@/components/DateController";
import * as api from "@/api";
import LoadingModal from "@/components/LoadingModal";
import MonthYearBtn from "./MonthYearBtn";
import PieChartComponent from "./PieChart";
import { DateControllerWrapper } from "./style";

const LineGraph = React.lazy(() => import("./LineGraph"));

function Graph() {
  const monthButton = true;
  const yearButton = false;
  const toDay = new Date();
  const [date, setDate] = useState(toDay);
  const [clickButtonColor, setClickButtonColor] = useState(true);
  const [checkMonth, setCheckMonth] = useState(false);
  const [graphTitle, setGraphTitle] = useState("월간");

  const [commitData, setCommitData] = useState([]);

  const getCommitsPerMonth = async () => {
    const year = date.toISOString().slice(0, 4);
    const data = await api.getCommitsTotalPerMonth(year);
    if (data.success) {
      const commitPerYear = await data.commitPerYear;

      const createData = commitPerYear.map((commitCnt, index) => ({
        id: `${date.toISOString().slice(0, 2)}:${index + 1}`,
        commit: commitCnt,
      }));
      setCommitData(createData);
    }
  };

  useEffect(() => {
    getCommitsPerMonth();
  }, [date]);

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
    if (monthButton) {
      setClickButtonColor(monthButton);
      setCheckMonth(false);
      setGraphTitle(checkMonth ? "월간" : "년간");
    }
  }, [graphTitle]);
  const handlYearBtn = useCallback(() => {
    if (!yearButton) {
      setClickButtonColor(!monthButton);
      setCheckMonth(true);
      setGraphTitle(checkMonth ? "월간" : "년간");
    }
  }, [graphTitle]);

  return (
    <Container>
      <Suspense fallback={<LoadingModal />}>
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
        <LineGraph graphTitle={graphTitle} commitData={commitData} />
        <PieChartComponent />
      </Suspense>
    </Container>
  );
}

export default Graph;
