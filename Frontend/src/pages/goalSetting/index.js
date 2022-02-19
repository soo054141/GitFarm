import React, { useEffect, useState } from "react";
// import { Container } from "@/components/Container/style";
import * as api from "@/api";
import CommitGoal from "./CommitGoal";
import Resolution from "./Resolution";
import InputModal from "./InputModal";
import { Container, TitleText, Wrapper } from "./style";

function GoalSetting() {
  const [randomNum, setRandomNum] = useState(undefined);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState(0);
  const [goalNum, setGoalNum] = useState();

  const getGoalValue = async () => {
    const { success, goal } = await api.getGoal("goal");
    if (success) {
      setGoalNum(goal);
    }
  };

  const modalOpenHandler = (type) => {
    setModalType(type);
    setOpenModal(true);
  };

  useEffect(() => {
    const random = Math.floor(Math.random() * 3);
    setRandomNum(random);
  }, []);
  useEffect(() => {
    getGoalValue();
  }, [openModal]);
  return (
    <Container>
      <TitleText>목표 설정</TitleText>
      <Wrapper>
        <CommitGoal
          onClick={() => modalOpenHandler("goal")}
          goalNum={goalNum}
        />
        {goalNum}
        <Resolution
          onClick={() => modalOpenHandler("resolution")}
          randomViewNum={randomNum}
        />
        {openModal && (
          <InputModal setOpenModal={setOpenModal} modalType={modalType} />
        )}
      </Wrapper>
    </Container>
  );
}

export default GoalSetting;
