import React, { useState } from "react";
import LevelImg from "@/assets/icon/level/level1.svg";
import InfoIcon from "@/assets/icon/info.svg";
import * as Level from "./style";
import LevelInformationModal from "../LevelInformationModal";

function LevelInfo({ level, score }) {
  const [openModal, setOpenModal] = useState(false);

  const modalOpenHandler = () => {
    setOpenModal(!openModal);
  };
  return (
    <Level.Wrapper>
      {openModal && <LevelInformationModal setOpenModal={setOpenModal} />}
      <Level.MyLevelIcon>
        <LevelImg />
      </Level.MyLevelIcon>
      <Level.MyLevelInfo>
        <Level.Content>
          <Level.Title>나의 레벨</Level.Title>
          <InfoIcon onClick={modalOpenHandler} />
        </Level.Content>
        <Level.Content>
          <Level.MyLevel>{level}</Level.MyLevel>
          <Level.MyScore>({score}점)</Level.MyScore>
        </Level.Content>
      </Level.MyLevelInfo>
    </Level.Wrapper>
  );
}

LevelInfo.defaultProps = {
  level: "씨앗",
  score: "30",
};

export default LevelInfo;
