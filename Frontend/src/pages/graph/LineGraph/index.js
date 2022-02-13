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
import * as LineGraphs from "./style";

function LineGraph({ graphTitle, date }) {
  const [commitData, setCommitData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCommitsPerMonth = async () => {
    setLoading(true);
    const year = date.toISOString().slice(0, 4);
    const data = await api.getCommitsTotalPerMonth(year);

    if (data.success) {
      const commitPerYear = await data.commitPerYear;

      const createData = commitPerYear.slice(1).map((commitCnt, index) => ({
        name: `${date.toISOString().slice(0, 2)}.${index + 1}`,
        commit: commitCnt,
      }));
      setCommitData(createData);
    } else {
      setCommitData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCommitsPerMonth();
  }, [date]);

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
};

LineGraph.defaultProps = {
  graphTitle: "월간" || "연간",
};

export default LineGraph;
