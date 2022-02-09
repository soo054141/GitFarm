import React, { useState } from "react";
import { SettingItem } from "@/components/MyPage/SettingItem";
import { Container } from "@/components/Container/style";
import NextArrow from "@/assets/icon/next-arrow.svg";
import { LogoutModal } from "./LogoutModal";
import { DeleteAccountModal } from "./DeleteAccountModal";
import * as Settings from "./style";

export function Setting() {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [openDeleteAccountModal, setOpenDeleteAccountModal] = useState(false);
  const ModalLogoutOpenHandler = () => {
    setOpenLogoutModal(true);
  };
  const ModalDeleteAccountOpenHandler = () => {
    setOpenDeleteAccountModal(true);
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
            onClick={ModalLogoutOpenHandler}
          />
          {openLogoutModal && <LogoutModal setOpenModal={setOpenLogoutModal} />}
          <SettingItem
            subTitle="깃팜 회원 탈퇴"
            textColor="#6ABD8C"
            content={<NextArrow />}
            onClick={ModalDeleteAccountOpenHandler}
          />
          {openDeleteAccountModal && (
            <DeleteAccountModal setOpenModal={setOpenDeleteAccountModal} />
          )}
        </Settings.ItemWrapper>
      </Settings.Wrapper>
    </Container>
  );
}
