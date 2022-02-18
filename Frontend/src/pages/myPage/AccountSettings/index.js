import React from "react";
import { Link } from "react-router-dom";
import RightArrow from "@/assets/icon/right-arrow.svg";
import NextArrow from "@/assets/icon/next-arrow.svg";
import SettingItem from "../SettingItem";
import * as Account from "./style";

function AccountSettings() {
  return (
    <Account.Wrapper>
      <h1>Account Settings</h1>
      <Link to="/setting">
        <Account.Content>
          <SettingItem subTitle="GitHub 계정 관리" content={<NextArrow />} />
        </Account.Content>
      </Link>

      <Link to="/goal">
        <Account.Content>
          <SettingItem subTitle="목표 설정" content={<NextArrow />} />
        </Account.Content>
      </Link>
    </Account.Wrapper>
  );
}

export default AccountSettings;
