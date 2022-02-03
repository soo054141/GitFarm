import React from "react";
import { FramePicture } from "../../components/Main/FarmePicture";
import { SpeechBubble } from "../../components/Main/SpeechBubble";
import * as Controller from "./style";

const initialState = {
  todaysCommit: 0,
  goalCommit: 6,
};

export function Main() {
  return (
    <Controller.Container>
      <Controller.TodaysCommitWrapper>
        <Controller.TodaysCommit>오늘의 커밋</Controller.TodaysCommit>
        <Controller.TodaysCommitCount>
          {initialState.todaysCommit}
        </Controller.TodaysCommitCount>
      </Controller.TodaysCommitWrapper>
      <Controller.FramePictureWrapper>
        <FramePicture
          ratio={Math.floor(
            (initialState.todaysCommit / initialState.goalCommit) * 100,
          )}
        />
      </Controller.FramePictureWrapper>
      <SpeechBubble />
    </Controller.Container>
  );
}
