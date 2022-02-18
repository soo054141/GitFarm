import React from "react";
import { Circle, Container, Wrapper } from "./style";

function ColorGuide() {
  return (
    <Container>
      <Wrapper>
        <Circle stage={1} />
        <p>1~5개</p>
      </Wrapper>
      <Wrapper>
        <Circle stage={2} />
        <p>6~10개</p>
      </Wrapper>
      <Wrapper>
        <Circle stage={3} />
        <p>11~15개</p>
      </Wrapper>
      <Wrapper>
        <Circle stage={4} />
        <p>16~20개</p>
      </Wrapper>
      <Wrapper>
        <Circle stage={5} />
        <p>20+개</p>
      </Wrapper>
    </Container>
  );
}

export default React.memo(ColorGuide);
