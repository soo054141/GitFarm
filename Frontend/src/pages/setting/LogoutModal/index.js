import React from "react";
import * as api from "@/api";
import Description from "@/components/Description";
import Modal from "@/components/Modal";
import PropTypes from "prop-types";
import { Wrapper } from "./style";

function LogoutModal({ setOpenModal }) {
  const logoutHanlder = async () => {
    await api.logout();
  };

  return (
    <Modal
      setOpenModal={setOpenModal}
      title="로그아웃"
      logoutHanlder={logoutHanlder}
      twoBtn
    >
      <Wrapper>
        <Description big>로그아웃 하시겠습니까?</Description>
      </Wrapper>
    </Modal>
  );
}
LogoutModal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
};
export default LogoutModal;
