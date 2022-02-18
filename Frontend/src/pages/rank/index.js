import React, { useEffect, useState } from "react";
import { Container } from "@/components/Container/style";
import * as api from "@/api";
import RankTitle from "./RankTitle";
import Rank from "./Rank";
import * as Ranks from "./style";

function RankPage() {
  const [myRank, setMyRank] = useState({});
  const [userRank, setUserRank] = useState([]);

  const getRank = async () => {
    const rankData = await api.getRank();
    if (rankData.success) {
      setMyRank(rankData.data.myRank);
      setUserRank(rankData.data.userRank);
    }
  };

  useEffect(() => {
    getRank();
  }, []);

  return (
    <Container>
      <RankTitle />
      <Ranks.ResponsiveDiv>
        <Rank
          myRanking
          imgURL={myRank.avatarUrl}
          id={myRank.username}
          point={myRank.score}
        />
        <Ranks.ResponsivUserRankWrapper>
          {userRank.map((it) => (
            <Rank
              key={`${it.username}-${it.rank}-${it.score}`}
              ranking={it.rank}
              imgURL={it.avatarUrl}
              id={it.username}
              point={it.score}
              rank={it.rank}
            />
          ))}
        </Ranks.ResponsivUserRankWrapper>
      </Ranks.ResponsiveDiv>
    </Container>
  );
}
export default RankPage;
