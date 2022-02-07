import React from "react";
import { Wrapper } from "./style";
import { Description } from "../../Description";
import { Modal } from "../../Modal";

export function Logout({ setOpenModal }) {
  return (
    <Modal setOpenModal={setOpenModal} title="로그아웃" twoBtn={true}>
      <Wrapper>
        <Description big>로그아웃 하시겠습니까?</Description>
      </Wrapper>
    </Modal>
  );
}
