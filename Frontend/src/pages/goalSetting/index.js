import React, { useState } from "react";
import { TitleText } from "./style";
import { CommitGoal } from "./CommitGoal";
import { Container } from "@/components/Container/style";
import { GoalInputModal } from "./GoalInputModal";

export function GoalSetting() {
  const [openModal, setOpenModal] = useState(false);
  const ModalOpenHandler = () => {
    setOpenModal(true);
  };

  return (
    <Container>
      <TitleText>목표 설정</TitleText>
      <CommitGoal onClick={ModalOpenHandler} />
      {openModal && <GoalInputModal setOpenModal={setOpenModal} />}
    </Container>
  );
}
