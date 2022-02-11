import React from "react";
import FightingIcon1 from "@/assets/icon/fightings/fighting-1.svg";
import FightingIcon2 from "@/assets/icon/fightings/fighting-2.svg";
import FightingIcon3 from "@/assets/icon/fightings/fighting-3.svg";
import {
  Container,
  Title,
  IconWrapper,
  Description,
} from "../CommitGoal/style";

function Resolution({ randomViewNum, onClick }) {
  return (
    <Container onClick={onClick}>
      <Title>나의 다짐 설정</Title>
      <Description>
        목표에 도달할 수 있도록
        <br />
        메세지를 설정하고 관리하세요!
        <br />
        나의 다짐 메세지는 캘린더 하단에서
        <br />
        확인하실 수 있습니다.
      </Description>
      <IconWrapper>
        {randomViewNum === 0 && <FightingIcon1 />}
        {randomViewNum === 1 && <FightingIcon2 className="fighting" />}
        {randomViewNum === 2 && <FightingIcon3 />}
      </IconWrapper>
    </Container>
  );
}

export default Resolution;
