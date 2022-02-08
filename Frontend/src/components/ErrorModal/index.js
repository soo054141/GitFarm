import React from "react";
import { Wrapper } from "./style";
import { Description, Modal } from "@/Components";

import SadIcon from "@/assets/icon/sad-face.svg";

export function ErrorModal({ setOpenModal }) {
  return (
    <Modal setOpenModal={setOpenModal} title="error">
      <Wrapper>
        <Description big>잠시 후 다시 시도해 주세요.</Description>
        <SadIcon />
      </Wrapper>
    </Modal>
  );
}
