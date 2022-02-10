import React from "react";
import { Modal } from "@/components/Modal";
import { Wrapper } from "./style";
import { Input } from "../Input";
export function GoalInputModal({ setOpenModal }) {
  return (
    <Wrapper>
      <Modal
        setOpenModal={setOpenModal}
        title="일별 목표 커밋 수"
        twoBtn={true}
      >
        <Input placeholder="숫자를 입력하세요. (목표 일일 커밋 수)" />
      </Modal>
    </Wrapper>
  );
}
