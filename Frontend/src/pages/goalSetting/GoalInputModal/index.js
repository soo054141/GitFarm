import React, { useState } from "react";
import Modal from "@/components/Modal";
import Wrapper from "./style";
import Input from "../Input";

function GoalInputModal({ setOpenModal, modalType }) {
  const [value, setValue] = useState("");
  const [goal, setGoal] = useState(0);
  const [message, setMessage] = useState("");

  const content = [
    {
      title: "일별 목표 커밋 수",
      text: "숫자를 입력하세요. (목표 일일 커밋 수)",
    },
    { title: "나의 다짐 설정", text: "메세지를 설정하세요. (최대 20자)" },
  ];

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const confirmHandler = () => {
    if (!value) {
      return alert("입력값을 확인하세요.");
    }

    if (modalType === 0) {
      setGoal(Number(value));
    } else {
      setMessage(value);
    }
  };

  return (
    <Wrapper>
      <Modal
        setOpenModal={setOpenModal}
        title={content[modalType].title}
        twoBtn
        confirmHandler={confirmHandler}
      >
        <Input
          onChangeCallback={onChangeHandler}
          type={modalType}
          placeholder={content[modalType].text}
        />
      </Modal>
    </Wrapper>
  );
}

export default GoalInputModal;
