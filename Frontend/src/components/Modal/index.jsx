import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Btn from "../Btn";
import {
  ModalContainer,
  Title,
  Content,
  BtnWrapper,
  ModalBackground,
  Validation,
} from "./style";

function Modal({
  children,
  setOpenModal,
  title,
  twoBtn,
  confirmHandler,
  validation,
  inputModal,
  logoutHandler,
  deleteAccountHandler,
}) {
  const modalElement = useRef();

  useEffect(() => {
    document.body.style.cssText = `
    position:fixed;
    top: -${window.scrollY}px;
    width: 100%;
    `;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const clickOutsideHandler = ({ target }) => {
    if (!modalElement.current.contains(target)) {
      closeModalHandler();
    }
  };

  return (
    <ModalBackground onClick={clickOutsideHandler}>
      <ModalContainer ref={modalElement}>
        {title && <Title>{title}</Title>}
        <Content>{children}</Content>
        {inputModal && (
          <Validation>
            <p>{validation}</p>
          </Validation>
        )}
        {twoBtn ? (
          <BtnWrapper>
            <Btn color="gray" onClick={closeModalHandler}>
              취소
            </Btn>
            {title === "로그아웃" && <Btn onClick={logoutHandler}>확인</Btn>}
            {title === "GitFarm 탈퇴하기" && (
              <Btn onClick={deleteAccountHandler}>확인</Btn>
            )}
            {title !== "로그아웃" && title !== "GitFarm 탈퇴하기" && (
              <Btn onClick={confirmHandler}>확인</Btn>
            )}
          </BtnWrapper>
        ) : (
          <BtnWrapper>
            <Btn long onClick={closeModalHandler}>
              확인
            </Btn>
          </BtnWrapper>
        )}
      </ModalContainer>
    </ModalBackground>
  );
}
Modal.defaultProps = {
  twoBtn: false,
  title: "",
  inputModal: false,
  validation: "",
  confirmHandler: () => {},
  logoutHandler: () => {},
  deleteAccountHandler: () => {},
};
Modal.propTypes = {
  children: PropTypes.element.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  twoBtn: PropTypes.bool,
  inputModal: PropTypes.bool,
  confirmHandler: PropTypes.func,
  validation: PropTypes.string,
  logoutHandler: PropTypes.func,
  deleteAccountHandler: PropTypes.func,
};
export default Modal;
