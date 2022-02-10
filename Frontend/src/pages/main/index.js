import React from "react";
import { FarmPicture } from "./FarmPicture/";
import { SpeechBubble } from "./SpeechBubble";
import { CommitDetails } from "./CommitDetails";
import * as Mains from "./style";

Main.defaultProps = {
  todaysCommit: 6,
  goalCommit: 6,
};
export function Main({ todaysCommit, goalCommit }) {
  return (
    <Mains.Container>
      <Mains.TodaysCommit>오늘의 커밋</Mains.TodaysCommit>
      {goalCommit - todaysCommit !== 0 ? (
        <Mains.TodaysCommitCount>
          농장 완성까지 {goalCommit - todaysCommit}커밋 남았습니다!
        </Mains.TodaysCommitCount>
      ) : (
        <Mains.TodaysCommitCount>
          농장이 완성되었습니다. 축하합니다!
        </Mains.TodaysCommitCount>
      )}
      <FarmPicture ratio={Math.floor((todaysCommit / goalCommit) * 100)} />
      <CommitDetails />
      {/* <SpeechBubble leftCommit={goalCommit - todaysCommit} /> */}
    </Mains.Container>
  );
}
