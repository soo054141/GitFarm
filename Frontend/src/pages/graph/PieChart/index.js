import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import githubLangColors from "./github-lang-colors.json";
import * as PieCharts from "./style";

PieChartComponent.defaultProps = {
  codeRatioArray: [
    { name: "JavaScript", value: 44.53 },
    { name: "HTML", value: 35.57 },
    { name: "CSS", value: 13.27 },
    { name: "TypeScript", value: 6.64 },
  ],
};

export function PieChartComponent({ codeRatioArray }) {
  const langColor = githubLangColors;
  const COLORS = codeRatioArray.map((it) => {
    const langName = it.name;
    return langColor[langName];
  });

  return (
    <PieCharts.Container>
      <PieCharts.Wrapper>
        <PieCharts.Heading>
          <PieCharts.Title>사용 언어 비율</PieCharts.Title>
          <PieCharts.Description>전체 레포 기준</PieCharts.Description>
        </PieCharts.Heading>
        <PieCharts.RatioWrapper>
          {codeRatioArray &&
            codeRatioArray.map((it, idx) => (
              <PieCharts.LangColorBoxWrapper key={`${it.name}-${it.value}`}>
                <PieCharts.LangColorBox idx={COLORS[idx]} />
                <div>
                  <PieCharts.LangText>{it.value}%</PieCharts.LangText>
                  <PieCharts.LangText>{it.name}</PieCharts.LangText>
                </div>
              </PieCharts.LangColorBoxWrapper>
            ))}
        </PieCharts.RatioWrapper>
      </PieCharts.Wrapper>

      <PieCharts.PieWrapper>
        <PieChart width={200} height={200}>
          <Pie
            data={codeRatioArray}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={70}
            fill="#8884d8"
            dataKey="value"
            isAnimationActive={false}
          >
            {codeRatioArray.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </PieCharts.PieWrapper>
    </PieCharts.Container>
  );
}
