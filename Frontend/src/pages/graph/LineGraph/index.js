import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import * as LineGraphs from "./style";

function LineGraph({ graphTitle, commitData }) {
  return (
    <LineGraphs.Container>
      <LineGraphs.Title>{graphTitle} 커밋 추이</LineGraphs.Title>
      <LineGraphs.Wrapper>
        {commitData && (
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
        )}
      </LineGraphs.Wrapper>
    </LineGraphs.Container>
  );
}

LineGraph.propTypes = {
  graphTitle: PropTypes.string,
  commitData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      commit: PropTypes.number,
    }),
  ),
};

LineGraph.defaultProps = {
  graphTitle: "월간" || "연간",
  commitData: [
    {
      name: "2020",
      commit: 200,
    },
    {
      name: "2021",
      commit: 15,
    },
    {
      name: "2022",
      commit: 704,
    },
  ],
};

export default LineGraph;
