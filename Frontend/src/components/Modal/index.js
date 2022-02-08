import React, { useEffect, useRef, useState } from "react";
import { Btn } from "../Btn";
import { Input } from "../Input";
import {
  ModalContainer,
  Title,
  Content,
  BtnWrapper,
  ModalBackground,
} from "./style";

export function Modal({ children, setOpenModal, title, twoBtn }) {
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
      setOpenModal(false);
    }
  };

  return (
    <ModalBackground onClick={clickOutsideHandler}>
      <ModalContainer ref={modalElement}>
        <Title>{title}</Title>
        <Content>{children}</Content>
        {twoBtn ? (
          <BtnWrapper>
            <Btn color="gray" onClick={closeModalHandler}>
              취소
            </Btn>
            <Btn>확인</Btn>
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
