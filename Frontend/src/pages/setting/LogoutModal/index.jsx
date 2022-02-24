import React from "react";
import { useNavigate } from "react-router-dom";
import * as api from "@/api";
import Description from "@/components/Description";
import Modal from "@/components/Modal";
import PropTypes from "prop-types";
import { Wrapper } from "./style";

function LogoutModal({ setOpenModal }) {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    const res = await api.logout();
    if (res.status === 200) {
      navigate("/");
    } else if (res.status === 204) {
      alert("비정상적인 접근입니다. 로그인페이지로 이동합니다.");
      navigate("/");
    } else {
      alert(res.data.message);
    }
  };

  return (
    <Modal
      setOpenModal={setOpenModal}
      title="로그아웃"
      logoutHandler={logoutHandler}
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
