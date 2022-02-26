import React from "react";
import PropTypes from "prop-types";
import LoadingModal from "@/components/LoadingModal";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import * as LineGraphs from "./style";

function LineGraph({ commitData, loading }) {
  return (
    <LineGraphs.Container>
      <LineGraphs.LineGraphContainer>
        {loading && <LoadingModal />}
        {!loading && commitData.length > 0 && (
          <>
            <LineGraphs.Title>월간 커밋 추이</LineGraphs.Title>
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
        )}
        {!loading && !commitData.length && (
          <LineGraphs.NoData>데이터가 없습니다.</LineGraphs.NoData>
        )}
      </LineGraphs.LineGraphContainer>
    </LineGraphs.Container>
  );
}

LineGraph.propTypes = {
  commitData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      commit: PropTypes.number.isRequired,
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default LineGraph;
