import React from "react";
import { Container } from "@/components/Container/style";
import { StartedDayCount } from "./StartedDayCount";
import { LevelInfo } from "./LevelInfo";
import { CommitCount } from "./CommitCount";
import { AccountSettings } from "./AccountSettings";

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
