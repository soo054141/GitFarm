import React from "react";
import * as Controller from "./style";

export function SpeechBubble({ leftCommit }) {
  return (
    <Controller.Container>
      <Controller.SpeechBubbleWrapper>
        <Controller.SpeechBubbleTitle>
          농장 완성까지 {leftCommit}커밋 남았습니다!
        </Controller.SpeechBubbleTitle>
        <Controller.SpeechBubbleText>
          Mypage에서 목표를 변경하실 수 있습니다.
        </Controller.SpeechBubbleText>
      </Controller.SpeechBubbleWrapper>
    </Controller.Container>
  );
}
