import React from "react";
import * as Level from "./style";
import LevelImg from "../../../assets/icon/level/level1.svg";

export function LevelInfo({ level, score }) {
  return (
    <Level.Wrapper>
      <Level.MyLevelIcon>
        <LevelImg />
      </Level.MyLevelIcon>
      <Level.MyLevelInfo>
        <Level.Content>
          <Level.Title>나의 레벨</Level.Title>
          <Level.InfoIcon />
        </Level.Content>
        <Level.Content>
          <Level.MyLevel>{level}</Level.MyLevel>
          <Level.MyScore>({score}점)</Level.MyScore>
        </Level.Content>
      </Level.MyLevelInfo>
    </Level.Wrapper>
  );
}

LevelInfo.defaultProps = {
  level: "씨앗",
  score: "30",
};
