import React from "react";
import { FramePicture } from "../../components/Main/FarmePicture";
import { SpeechBubble } from "../../components/Main/SpeechBubble";
import * as Controller from "./style";

Main.defaultProps = {
  todaysCommit: 0,
  goalCommit: 6,
};
export function Main({ todaysCommit, goalCommit }) {
  return (
    <Controller.Container>
      <Controller.TodaysCommit>오늘의 커밋</Controller.TodaysCommit>
      <Controller.TodaysCommitCount>
        {todaysCommit}
      </Controller.TodaysCommitCount>
      <FramePicture ratio={Math.floor((todaysCommit / goalCommit) * 100)} />
      <SpeechBubble leftCommit={goalCommit - todaysCommit} />
    </Controller.Container>
  );
}
