import React, { useRef, useEffect } from "react";
import { Wrapper } from "./style";
import { Description } from "../../Description";
import { Modal } from "../../Modal";
import SadIcon from "../../../assets/icon/sad-face.svg";
export function DeleteAccount({ setOpenModal }) {
  return (
    <Modal setOpenModal={setOpenModal} title="GitFarm 탈퇴하기" twoBtn={true}>
      <Wrapper>
        <Description>
          GitFarm 내의 모든 정보를 삭제하고
          <br />
          정말로 탈퇴하시겠습니까? <br />
          사라진 계정 정보는 복구할 수 없습니다.
        </Description>
        <SadIcon />
      </Wrapper>
    </Modal>
  );
}
