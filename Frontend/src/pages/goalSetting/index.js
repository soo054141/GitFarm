import React, { useEffect, useState } from "react";
import { TitleText } from "./style";
import { CommitGoal } from "./CommitGoal";
import { Container } from "@/components/Container/style";
import { GoalInputModal } from "./GoalInputModal";
import { Resolution } from "./Resolution";

export function GoalSetting() {
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
      <CommitGoal onClick={() => modalOpenHandler(0)} />
      <Resolution
        onClick={() => modalOpenHandler(1)}
        randomViewNum={randomNum}
      />
      {openModal && (
        <GoalInputModal setOpenModal={setOpenModal} modalType={modalType} />
      )}
    </Container>
  );
}
