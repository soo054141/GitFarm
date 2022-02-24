import React, { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import PropTypes from "prop-types";
import * as api from "@/api";

import { Wrapper } from "./style";
import Input from "../Input";

function InputModal({ setOpenModal, modalType }) {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [validation, setValidation] = useState("");

  const getGoalValue = async () => {
    setLoading(true);
    const { success, goal } = await api.getGoal();
    if (success) {
      if (goal !== 0) {
        setValue(goal);
      }

      setLoading(false);
    }
  };

  const getResolutionValue = async () => {
    setLoading(true);
    const { success, resolution } = await api.getResolution();
    if (success) {
      if (resolution !== 0) {
        setValue(resolution);
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
    if (modalType === "goal") {
      getGoalValue();
      return;
    }
    if (modalType === "resolution") {
      getResolutionValue();
    }
  }, []);

  const inputType = modalType === "goal" ? "number" : "text";
  const content = {
    goal: {
      title: "일별 목표 커밋 수",
      text: "숫자를 입력하세요. (목표 일일 커밋 수)",
    },
    resolution: {
      title: "나의 다짐 설정",
      text: "메세지를 설정하세요. (최대 20자)",
    },
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const confirmHandler = () => {
    if (modalType === "goal") {
      if (value < 1 || value > 99) {
        setValidation("1~99까지의 숫자를 입력해주세요");
        return;
      }
      setValidation("");
      postGoalInput(Number(value));
      setOpenModal(false);
      return;
    }
    if (modalType === "resolution") {
      if (value.length <= 0) {
        setValidation("값을 입력해주세요");
        return;
      }
      setValidation("");
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
        inputModal
        validation={validation}
      >
        <Input
          value={!loading ? value : ""}
          onChangeCallback={onChangeHandler}
          inputType={inputType}
          placeholder={content[modalType].text}
        />
      </Modal>
    </Wrapper>
  );
}

InputModal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  modalType: PropTypes.string.isRequired,
};

export default InputModal;
