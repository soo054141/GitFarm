import React, { useEffect, useState } from "react";
import LeafIcon from "@/assets/icon/blank-leaf.svg";
import PropTypes from "prop-types";
import * as api from "@/api";

import { Container, Title, IconWrapper, GoalNum, Description } from "./style";

function CommitGoal({ onClick }) {
  const [goalNum, setGoalNum] = useState();

  const getGoalValue = async () => {
    const { success, goal } = await api.getGoal("goal");
    if (success) {
      setGoalNum(goal);
    }
  };

  useEffect(() => {
    getGoalValue();
  });

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
      <GoalNum length={String(goalNum).length}>{goalNum}</GoalNum>
    </Container>
  );
}

CommitGoal.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default CommitGoal;
