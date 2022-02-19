import React from "react";
import { useNavigate } from "react-router-dom";
import * as api from "@/api";
import Description from "@/components/Description";
import Modal from "@/components/Modal";
import PropTypes from "prop-types";
import { Wrapper } from "./style";

function LogoutModal({ setOpenModal }) {
  const navigate = useNavigate();

  const logoutHanlder = async () => {
    const res = await api.logout();
    if (res.data.success) {
      alert(res.data.message);
      navigate("/");
    }
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
