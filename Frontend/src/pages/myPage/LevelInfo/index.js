import React, { useState } from "react";
import * as Level from "./style";
import LevelImg from "@/assets/icon/level/level1.svg";
import InfoImg from "@/assets/icon/info.svg";
import { LevelInfomationModal } from "../LevelInfomationModal";

export function LevelInfo({ level, score }) {
  const [openModal, setOpenModal] = useState(false);

  const modalOpenHandler = () => {
    setOpenModal(!openModal);
  };
  return (
    <Level.Wrapper>
      {openModal && <LevelInfomationModal setOpenModal={setOpenModal} />}
      <Level.MyLevelIcon>
        <LevelImg />
      </Level.MyLevelIcon>
      <Level.MyLevelInfo>
        <Level.Content>
          <Level.Title>나의 레벨</Level.Title>
          <InfoImg onClick={modalOpenHandler} />
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
