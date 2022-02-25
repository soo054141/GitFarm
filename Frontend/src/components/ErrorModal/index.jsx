import React from "react";
import PropTypes from "prop-types";
import SadIcon from "@/assets/icon/sad-face.svg";
import Description from "@/components/DateController";
import Modal from "@/components/Modal";
import { Wrapper } from "./style";

function ErrorModal({ setOpenModal }) {
  return (
    <Modal setOpenModal={setOpenModal} title="error">
      <Wrapper>
        <Description big>잠시 후 다시 시도해 주세요.</Description>
        <SadIcon />
      </Wrapper>
    </Modal>
  );
}

ErrorModal.propTypes = {
  setOpenModal: PropTypes.bool.isRequired,
};

export default ErrorModal;
