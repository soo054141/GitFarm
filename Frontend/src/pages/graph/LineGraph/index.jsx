import React from "react";
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

function LineGraph({ commitData, commitsLoading }) {
  return (
    <LineGraphs.Container>
      {commitsLoading ? (
        <LoadingModal />
      ) : (
        <LineGraphs.LineGraphContainer>
          {commitData.length ? (
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
          ) : (
            <LineGraphs.NoData>데이터가 없습니다.</LineGraphs.NoData>
          )}
        </LineGraphs.LineGraphContainer>
      )}
    </LineGraphs.Container>
  );
}

export default LineGraph;
