import React, { useState, useEffect } from "react";
import { getResolution } from "@/api";
import * as SpeechBubbles from "./style";

function SpeechBubble() {
  const [value, setValue] = useState();
  const getResolutionValue = async () => {
    const data = await getResolution();

    if (data.resolution.length > 0) {
      setValue(data.resolution);
    } else {
      setValue("우주최강 개발자가 될거야!");
    }
  };
  useEffect(() => {
    getResolutionValue();
  }, []);
  return (
    <SpeechBubbles.Container>
      <SpeechBubbles.Wrapper>
        <SpeechBubbles.Text>
          1일 목표커밋을 달성하여 꾸준히 잔디를 관리하세요
        </SpeechBubbles.Text>
        <SpeechBubbles.Title>{value}</SpeechBubbles.Title>
      </SpeechBubbles.Wrapper>
    </SpeechBubbles.Container>
  );
}

export default React.memo(SpeechBubble);
