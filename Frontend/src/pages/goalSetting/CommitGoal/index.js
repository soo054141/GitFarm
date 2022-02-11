import React from "react";
import LeafIcon from "@/assets/icon/blank-leaf.svg";
import { Container, Title, IconWrapper, GoalNum, Description } from "./style";
// import { Description } from "@/components/Description";

function CommitGoal({ goalNum, onClick }) {
  const NumLength = String(goalNum).length;

  return (
    <Container onClick={onClick}>
      <Title>일별 목표 커밋 수</Title>
      <Description>
        하루 목표 커밋을 설정하고 <br />
        꾸준히 지켜보세요! <br />
        목표 커밋에 가까워질수록 농장이 채워집니다. <br />
        농장은 홈버튼을 누르면 확인하실 수 있습니다.
      </Description>
      <IconWrapper>
        <LeafIcon />
      </IconWrapper>
      <GoalNum length={NumLength}>{goalNum}</GoalNum>
    </Container>
  );
}

CommitGoal.defaultProps = {
  goalNum: 3,
};

export default CommitGoal;
