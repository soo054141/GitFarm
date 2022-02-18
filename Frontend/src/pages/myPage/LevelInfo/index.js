import React, { useMemo, useState } from "react";
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
  const [level, setLevel] = useState("씨앗");

  const modalOpenHandler = () => {
    setOpenModal(!openModal);
  };

  const levelCalculator = useMemo(() => {
    if (totalScore >= 1651) {
      setLevel("팜 마스터");
      return <LevelImg5 />;
    }
    if (totalScore >= 851 && totalScore <= 1650) {
      setLevel("고수 농부");
      return <LevelImg4 />;
    }
    if (totalScore >= 351 && totalScore <= 850) {
      setLevel("중수 농부");
      return <LevelImg3 />;
    }
    if (totalScore >= 101 && totalScore <= 350) {
      setLevel("초보 농부");
      return <LevelImg2 />;
    }
    return <LevelImg1 />;
  }, [totalScore]);

  return (
    <Level.Wrapper>
      {openModal && <LevelInformationModal setOpenModal={setOpenModal} />}
      <Level.MyLevelIcon>{levelCalculator}</Level.MyLevelIcon>
      <Level.MyLevelInfo>
        <Level.Content>
          <Level.Title>나의 레벨</Level.Title>
          <InfoIcon onClick={modalOpenHandler} />
        </Level.Content>
        <Level.Content>
          <Level.MyLevel>{level}</Level.MyLevel>
          <Level.MyScore>({totalScore.toLocaleString()}점)</Level.MyScore>
        </Level.Content>
      </Level.MyLevelInfo>
    </Level.Wrapper>
  );
}

LevelInfo.defaultProps = {
  totalScore: 30,
};

LevelInfo.propTypes = {
  totalScore: PropTypes.number,
};

export default LevelInfo;
