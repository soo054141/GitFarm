import React, { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import PropTypes from "prop-types";
import * as api from "@/api";

import { Wrapper } from "./style";
import Input from "../Input";

function GoalInputModal({ setOpenModal, modalType }) {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [goal, setGoal] = useState();

  const [message, setMessage] = useState();
  const [validation, setValidation] = useState("");

  const getGoalValue = async () => {
    setLoading(true);
    const data = await api.getGoal();
    if (data.success) {
      if (data.goal !== 0) {
        setValue(data.goal);
      }

      setLoading(false);
    }
  };
  const getResolutionValue = async () => {
    setLoading(true);
    const data = await api.getResolution();
    if (data.success) {
      if (data.resolution.length !== 0) {
        setValue(data.resolution);
      }

      setLoading(false);
    }
  };
  const postGoalInput = async (goalNum) => {
    await api.postGoal(goalNum);
  };
  const postResolutionInput = async (postResolution) => {
    await api.postResolution(postResolution);
  };
  useEffect(() => {
    if (modalType === 1) {
      getResolutionValue();
    } else {
      getGoalValue();
    }
  }, []);
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
    
    if (modalType === 0) {
      if (value < 1 || value >= 100) {
        setValidation("1~100까지의 숫자를 입력해주세요");
        return;
      }
      setValidation("");
      setGoal(Number(value));
      postGoalInput(value);
      setOpenModal(false);
    } else {
      if (value.length <= 0) {
        setValidation("값을 입력해주세요");
        return;
      }
      setValidation("");
      setMessage(value);
      postResolutionInput(value);
      setOpenModal(false);
    }
  };
  return (
    <Wrapper>
      <Modal
        setOpenModal={setOpenModal}
        title={content[modalType].title}
        twoBtn
        confirmHandler={confirmHandler}
        inputValue={modalType === 0 ? goal : message}
        inputModal
        validation={validation}
      >
        <Input
          value={!loading && value}
          onChangeCallback={onChangeHandler}
          type={modalType}
          placeholder={content[modalType].text}
        />
      </Modal>
    </Wrapper>
  );
}

GoalInputModal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  modalType: PropTypes.number.isRequired,
};

export default GoalInputModal;
