import React, { useEffect, useState } from "react";
// import { Container } from "@/components/Container/style";
import NextArrow from "@/assets/icon/next-arrow.svg";
import * as api from "@/api";
import LogoutModal from "./LogoutModal";
import DeleteAccountModal from "./DeleteAccountModal";
import SettingItem from "../myPage/SettingItem";
import * as Settings from "./style";

function Setting() {
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [openDeleteAccountModal, setOpenDeleteAccountModal] = useState(false);
  const [myId, setMyId] = useState("");

  const ModalLogoutOpenHandler = () => {
    setOpenLogoutModal(true);
  };
  const ModalDeleteAccountOpenHandler = () => {
    setOpenDeleteAccountModal(true);
  };

  const getRank = async () => {
    const rankData = await api.getRank();
    if (rankData.success) {
      setMyId(rankData.data.myRank.username);
    }
  };

  useEffect(() => {
    getRank();
  }, []);

  return (
    <Settings.Container>
      <Settings.Wrapper>
        <Settings.Title>GitHub 계정관리</Settings.Title>
        <Settings.ItemWrapper>
          <SettingItem subTitle="로그인 계정" setCursor content={myId} />
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
    </Settings.Container>
  );
}

export default Setting;
