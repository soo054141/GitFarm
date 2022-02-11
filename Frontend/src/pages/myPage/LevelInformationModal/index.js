import React from "react";
import PropTypes from "prop-types";
import Level1 from "@/assets/icon/level/level1.svg";
import Level2 from "@/assets/icon/level/level2.svg";
import Level3 from "@/assets/icon/level/level3.svg";
import Level4 from "@/assets/icon/level/level4.svg";
import Level5 from "@/assets/icon/level/level5.svg";
import Modal from "@/components/Modal";
import { LevelWrapper, Explanation, IconWrapper } from "./style";

function LevelInformationModal({ setOpenModal }) {
  return (
    <Modal setOpenModal={setOpenModal} title="레벨 안내">
      <LevelWrapper>
        <IconWrapper>
          <Level1 />
          <p>씨앗</p>
        </IconWrapper>
        <Explanation>
          깃팜에 오신 걸 환영합니다!
          <br />
          씨앗 레벨은 0~99점 구간입니다. <br />
          얼른 커밋 하러 가보세요!
          <br />
        </Explanation>
      </LevelWrapper>
      <LevelWrapper>
        <IconWrapper>
          <Level2 />
          <p>초보 농부</p>
        </IconWrapper>

        <Explanation>
          커밋 생활에 적응하셨군요! <br />
          초보 농부 레벨은 100~350점 구간입니다. <br />
          매일 커밋 한다면 새로운 배지를 얻을 수 <br />
          있는 사실을 알고 계시나요?
        </Explanation>
      </LevelWrapper>
      <LevelWrapper>
        <IconWrapper>
          <Level3 />
          <p>중수 농부</p>
        </IconWrapper>

        <Explanation>
          중수의 냄새가 나기 시작했습니다! <br />
          중수 농부 레벨은 351~850점 구간입니다. <br />
          배지를 모으는 재미로 깃팜을 즐겨보세요~
        </Explanation>
      </LevelWrapper>
      <LevelWrapper>
        <IconWrapper>
          <Level4 />
          <p>고수 농부</p>
        </IconWrapper>

        <Explanation>
          팜 마스터가 얼마 안 남았습니다! <br />
          조금 더 노력해보세요! <br />
          고수 농부 레벨은 851~1650점 구간입니다.
        </Explanation>
      </LevelWrapper>
      <LevelWrapper>
        <IconWrapper>
          <Level5 />
          <p>팜 마스터</p>
        </IconWrapper>

        <Explanation>
          팜 마스터 레벨은 1651점 이상입니다. <br />
          꾸준한 공부는 여러분의 자산이 될 것입니다.
        </Explanation>
      </LevelWrapper>
    </Modal>
  );
}

LevelInformationModal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
};

export default LevelInformationModal;
