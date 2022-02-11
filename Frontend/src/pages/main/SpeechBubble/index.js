import React from "react";
import * as SpeechBubbles from "./style";

function SpeechBubble({ leftCommit }) {
  return (
    <SpeechBubbles.Container>
      <SpeechBubbles.Wrapper>
        <SpeechBubbles.Title>
          농장 완성까지 {leftCommit}커밋 남았습니다!
        </SpeechBubbles.Title>
        <SpeechBubbles.Text>
          Mypage에서 목표를 변경하실 수 있습니다.
        </SpeechBubbles.Text>
      </SpeechBubbles.Wrapper>
    </SpeechBubbles.Container>
  );
}

export default SpeechBubble;
