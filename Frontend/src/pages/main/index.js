import React from "react";
import { FarmPicture } from "./FarmPicture/";
import { SpeechBubble } from "./SpeechBubble";
import * as Mains from "./style";

Main.defaultProps = {
  todaysCommit: 0,
  goalCommit: 6,
};
export function Main({ todaysCommit, goalCommit }) {
  return (
    <Mains.Container>
      <Mains.TodaysCommit>오늘의 커밋</Mains.TodaysCommit>
      <Mains.TodaysCommitCount>{todaysCommit}</Mains.TodaysCommitCount>
      <FarmPicture ratio={Math.floor((todaysCommit / goalCommit) * 100)} />
      <SpeechBubble leftCommit={goalCommit - todaysCommit} />
    </Mains.Container>
  );
}
