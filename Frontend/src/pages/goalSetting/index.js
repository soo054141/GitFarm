import React, { useEffect, useState } from "react";
// import { Container } from "@/components/Container/style";
import CommitGoal from "./CommitGoal";
import Resolution from "./Resolution";
import GoalInputModal from "./GoalInputModal";
import { TitleText, Container, Wrapper } from "./style";

function GoalSetting() {
  const [randomNum, setRandomNum] = useState(undefined);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState(0);

  const modalOpenHandler = (idx) => {
    setModalType(idx);
    setOpenModal(true);
  };

  useEffect(() => {
    const random = Math.floor(Math.random() * 3);
    setRandomNum(random);
  }, []);

  return (
    <Container>
      <TitleText>목표 설정</TitleText>
      <Wrapper>
        <CommitGoal onClick={() => modalOpenHandler(0)} />
        <Resolution
          onClick={() => modalOpenHandler(1)}
          randomViewNum={randomNum}
        />
        {openModal && (
          <GoalInputModal setOpenModal={setOpenModal} modalType={modalType} />
        )}
      </Wrapper>
    </Container>
  );
}

export default GoalSetting;
