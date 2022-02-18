import React, { useState, useEffect } from "react";
import { Container } from "@/components/Container/style";
import * as api from "@/api";
import StartedDayCount from "./StartedDayCount";
import LevelInfo from "./LevelInfo";
import CommitCount from "./CommitCount";
import AccountSettings from "./AccountSettings";
import { ResponsiveDiv } from "./style";

function MyPage() {
  const [user, setUser] = useState({
    memberDate: 0,
    totalScore: 0,
    total: 0,
    continuous: 0,
  });
  const dataFunc = async () => {
    const res = await api.getMyInfo();

    if (res.success) {
      const data = await res.mypage;
      setUser(data);
    }
  };

  useEffect(() => {
    dataFunc();
  }, []);

  return (
    <Container>
      <StartedDayCount memberDate={user.memberDate} />
      <ResponsiveDiv>
        <LevelInfo totalScore={user.totalScore} />
        <CommitCount total={user.total} continuous={user.continuous} />
      </ResponsiveDiv>
      <AccountSettings />
    </Container>
  );
}

export default MyPage;
