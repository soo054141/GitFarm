import React, { useEffect, useState } from "react";
import LoadingModal from "@/components/LoadingModal";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import * as api from "@/api";
import { checkMonth } from "@/utils/graph";
import * as LineGraphs from "./style";

function LineGraph({ graphTitle, date, clickYear }) {
  const [commitData, setCommitData] = useState([]);
  const [loading, setLoading] = useState(false);

  if (clickYear) {
    const getRecentThreeYearCommitsCount = async () => {
      setLoading(true);
      const data = await api.getRecentThreeYear();
      if (data.success) {
        const createData = data.lastThreeYear.map((it) => ({
          name: it[0],
          commit: it[1],
        }));
        setCommitData(createData);
      } else {
        setCommitData([]);
      }
      setLoading(false);
    };

    useEffect(() => {
      getRecentThreeYearCommitsCount();
    }, [clickYear]);
  } else {
    const getCommitsPerMonth = async () => {
      setLoading(true);
      const { year, month, thisMonth } = checkMonth(date);

      const data = await api.getCommitsTotalPerMonth(year);
      if (data.success) {
        let { commitPerYear } = data;

        if (month === thisMonth) {
          commitPerYear = commitPerYear.slice(0, thisMonth + 1);
        }

        const checkEmptyArray = commitPerYear.every((it) => it === 0);
        if (checkEmptyArray) {
          setCommitData([]);
        } else {
          const createData = commitPerYear.slice(1).map((commitCnt, index) => ({
            name: `${year.slice(2, 4)}.${index + 1}`,
            commit: commitCnt,
          }));
          setCommitData(createData);
        }
      } else {
        setCommitData([]);
      }
      setLoading(false);
    };

    useEffect(() => {
      getCommitsPerMonth();
    }, [date]);
  }

  return (
    <LineGraphs.Container>
      {loading ? (
        <LoadingModal />
      ) : (
        <>
          {commitData.length ? (
            <>
              <LineGraphs.Title>{graphTitle} 커밋 추이</LineGraphs.Title>
              <LineGraphs.Wrapper>
                <LineChart width={350} height={280} data={commitData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="commit"
                    stroke="#6ABD8C"
                    activeDot={{ r: 2 }}
                    isAnimationActive={false}
                  />
                </LineChart>
              </LineGraphs.Wrapper>
            </>
          ) : (
            <LineGraphs.NoData>데이터가 없습니다.</LineGraphs.NoData>
          )}
        </>
      )}
    </LineGraphs.Container>
  );
}

LineGraph.propTypes = {
  graphTitle: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  clickYear: PropTypes.bool.isRequired,
};

LineGraph.defaultProps = {
  graphTitle: "월간" || "연간",
};

export default LineGraph;
