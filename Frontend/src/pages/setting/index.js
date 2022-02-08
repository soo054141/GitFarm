import React, { useState } from "react";
import { SettingItem } from "../../components/MyPage/SettingItem";
import { Container } from "./../../components/Container/style";
import NextArrow from "../../assets/icon/next-arrow.svg";
import { Logout } from "./../../components/ModalTypes/Logout";
import { DeleteAccount } from "./../../components/ModalTypes/DeleteAccount";
import * as Settings from "./style";

export function Setting() {
  const [openModal, setOpenModal] = useState(false);

  const ModalOpenHandler = () => {
    console.log("클릭");
    setOpenModal(true);
  };

  return (
    <Container>
      <Settings.Wrapper>
        <Settings.Title>GitHub 계정관리</Settings.Title>
        <Settings.ItemWrapper>
          <SettingItem subTitle="로그인 계정" />
          <SettingItem
            subTitle="계정 로그아웃"
            content={<NextArrow />}
            onClick={ModalOpenHandler}
          />
          {openModal && <Logout setOpenModal={setOpenModal} />}
          <SettingItem
            subTitle="깃팜 회원 탈퇴"
            textColor="#6ABD8C"
            content={<NextArrow />}
            onClick={ModalOpenHandler}
          />
          {openModal && <DeleteAccount setOpenModal={setOpenModal} />}
        </Settings.ItemWrapper>
      </Settings.Wrapper>
    </Container>
  );
}
