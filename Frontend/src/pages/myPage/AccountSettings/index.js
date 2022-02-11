import React from "react";
import { Link } from "react-router-dom";
import ArrowWrapper from "@/components/DateController/style";
import RightArrow from "@/assets/icon/right-arrow.svg";
import * as Account from "./style";

function AccountSettings() {
  return (
    <Account.Wrapper>
      <h1>Account Settings</h1>
      <Link to="/setting">
        <Account.Content>
          <h2>GitHub 계정 관리</h2>
          <ArrowWrapper>
            <RightArrow />
          </ArrowWrapper>
        </Account.Content>
      </Link>

      <Link to="/goal">
        <Account.Content>
          <h2>목표 설정</h2>
          <ArrowWrapper>
            <RightArrow />
          </ArrowWrapper>
        </Account.Content>
      </Link>
    </Account.Wrapper>
  );
}

export default AccountSettings;
