import React from "react";
import { Wrapper, SubTitle, Content } from "./style";

export function SettingItem({ subTitle, textColor, content, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <SubTitle textColor={textColor}>{subTitle}</SubTitle>
      <Content>{content}</Content>
    </Wrapper>
  );
}

SettingItem.defaultProps = {
  subTitle: "로그인 계정22",
  textColor: "#595959",
  content: "testId",
};
