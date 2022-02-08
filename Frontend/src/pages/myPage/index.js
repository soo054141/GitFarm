import React from "react";
import { Container } from "../../components/Container/style";
import { StartedDayCount } from "../../components/MyPage/StartedDayCount";
import { LevelInfo } from "../../components/MyPage/LevelInfo";
import { CommitCount } from "../../components/MyPage/CommitCount";
import { AccountSettings } from "../../components/MyPage/AccountSettings";

export function MyPage() {
  return (
    <Container>
      <StartedDayCount />
      <LevelInfo />
      <CommitCount />
      <AccountSettings />
    </Container>
  );
}
