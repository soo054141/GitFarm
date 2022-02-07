import React from "react";
import { SettingItem } from "../../components/MyPage/SettingItem";
import { Container } from "./../../components/Container/style";
import NextArrow from "../../assets/icon/next-arrow.svg";

import * as Settings from "./style";

export function Setting() {
  return (
    <Container>
      <Settings.Wrapper>
        <Settings.Title>GitHub 계정관리</Settings.Title>
        <Settings.ItemWrapper>
          <SettingItem subTitle="로그인 계정" />
          <SettingItem subTitle="계정 로그아웃" content={<NextArrow />} />
          <SettingItem
            subTitle="깃팜 회원 탈퇴"
            textColor="#6ABD8C"
            content={<NextArrow />}
          />
        </Settings.ItemWrapper>
      </Settings.Wrapper>
    </Container>
  );
}
