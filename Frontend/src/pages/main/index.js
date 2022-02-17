import React, { useEffect, useState } from "react";
import LoadingModal from "@/components/LoadingModal";
import * as api from "@/api";
import FarmPicture from "./FarmPicture";
import CommitDetails from "./CommitDetails";
import * as Mains from "./style";

function Main() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    todayScore: 0,
    goal: 0,
    todayCommit: 0,
    detail: [],
  });

  const getTodayData = async () => {
    setLoading(true);

    const data = await api.getTodayCommit();
    if (data.success) {
      setUser(data.today);
    }
    setLoading(false);
  };

  useEffect(() => {
    getTodayData();
  }, []);

  return (
    <Mains.Container>
      {!loading ? (
        <>
          <Mains.TodaysCommit>오늘의 커밋</Mains.TodaysCommit>
          {user.goal !== 0 && user.goal - user.todayCommit <= 0 ? (
            <Mains.TodaysCommitCount>
              농장이 완성되었습니다. 축하합니다!
            </Mains.TodaysCommitCount>
          ) : (
            <Mains.TodaysCommitCount>
              농장 완성까지 {user.goal - user.todayCommit}커밋 남았습니다!
            </Mains.TodaysCommitCount>
          )}
          <FarmPicture
            ratio={Math.floor((user.todayCommit / user.goal) * 100)}
          />
          <CommitDetails
            todayScore={user.todayScore}
            todayCommit={user.todayCommit}
            detail={user.detail}
          />
        </>
      ) : (
        <LoadingModal />
      )}
    </Mains.Container>
  );
}

export default Main;
