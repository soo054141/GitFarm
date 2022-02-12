import React, { useState } from "react";
import PropTypes from "prop-types";
import LevelImg from "@/assets/icon/level/level1.svg";
import InfoIcon from "@/assets/icon/info.svg";
import * as Level from "./style";
import LevelInformationModal from "../LevelInformationModal";

function LevelInfo({ score }) {
  const [openModal, setOpenModal] = useState(false);

  const modalOpenHandler = () => {
    setOpenModal(!openModal);
  };

  // 구현해서 아래 컴포넌트에 적용해야함
  // const levelCalculator = () => {
  //   if (score >= 1651) {
  //     console.log("팜 마스터");
  //   } else {
  //   }
  // };

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
          <Level.MyLevel>씨앗</Level.MyLevel>
          <Level.MyScore>({score}점)</Level.MyScore>
        </Level.Content>
      </Level.MyLevelInfo>
    </Level.Wrapper>
  );
}

LevelInfo.defaultProps = {
  // level: "씨앗",
  score: 30,
};

LevelInfo.propTypes = {
  // level: PropTypes.string,
  score: PropTypes.number,
};

export default LevelInfo;
