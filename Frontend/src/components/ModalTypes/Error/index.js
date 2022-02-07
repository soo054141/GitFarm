import React from "react";
import { Wrapper } from "./style";
import { Description } from "../../Description";
import { Modal } from "../../Modal";
import SadIcon from "../../../assets/icon/sad-face.svg";

export function Error({ setOpenModal }) {
  return (
    <Modal setOpenModal={setOpenModal} title="error">
      <Wrapper>
        <Description big>잠시 후 다시 시도해 주세요.</Description>
        <SadIcon />
      </Wrapper>
    </Modal>
  );
}
