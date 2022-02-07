import React, { useState } from "react";
import { TitleText } from "./style";
import { CommitGoal } from "../../components/CommitGoal";
import { Container } from "../../components/Container/style";
import { GoalInput } from "../../components/ModalTypes/GoalInput";

export function GoalSetting() {
  const [openModal, setOpenModal] = useState(false);
  const ModalOpenHandler = () => {
    setOpenModal(true);
  };

  return (
    <Container>
      <TitleText>목표 설정</TitleText>
      <CommitGoal onClick={ModalOpenHandler} />
      {openModal && <GoalInput setOpenModal={setOpenModal} />}
    </Container>
  );
}
