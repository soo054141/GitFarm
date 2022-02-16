import React, { useState } from "react";
import PropTypes from "prop-types";
import LevelImg1 from "@/assets/icon/level/level1.svg";
import LevelImg2 from "@/assets/icon/level/level2.svg";
import LevelImg3 from "@/assets/icon/level/level3.svg";
import LevelImg4 from "@/assets/icon/level/level4.svg";
import LevelImg5 from "@/assets/icon/level/level5.svg";
import InfoIcon from "@/assets/icon/info.svg";
import * as Level from "./style";
import LevelInformationModal from "../LevelInformationModal";

function LevelInfo({ totalScore }) {
  const [openModal, setOpenModal] = useState(false);

  const modalOpenHandler = () => {
    setOpenModal(!openModal);
  };

  const levelCalculator = () => {
    if (totalScore >= 1651) {
      return <LevelImg5 />;
    }
    if (totalScore >= 851 && totalScore <= 1650) {
      return <LevelImg4 />;
    }
    if (totalScore >= 351 && totalScore <= 850) {
      return <LevelImg3 />;
    }
    if (totalScore >= 101 && totalScore <= 350) {
      return <LevelImg2 />;
    }
    return <LevelImg1 />;
  };

  return (
    <Level.Wrapper>
      {openModal && <LevelInformationModal setOpenModal={setOpenModal} />}
      <Level.MyLevelIcon>{levelCalculator()}</Level.MyLevelIcon>
      <Level.MyLevelInfo>
        <Level.Content>
          <Level.Title>나의 레벨</Level.Title>
          <InfoIcon onClick={modalOpenHandler} />
        </Level.Content>
        <Level.Content>
          <Level.MyLevel>씨앗</Level.MyLevel>
          <Level.MyScore>({totalScore}점)</Level.MyScore>
        </Level.Content>
      </Level.MyLevelInfo>
    </Level.Wrapper>
  );
}

LevelInfo.defaultProps = {
  // level: "씨앗",
  totalScore: 30,
};

LevelInfo.propTypes = {
  // level: PropTypes.string,
  totalScore: PropTypes.number,
};

export default LevelInfo;
