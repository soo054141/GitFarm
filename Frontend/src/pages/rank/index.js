import React, { useEffect, useState } from "react";
import { Container } from "@/components/Container/style";
import * as api from "@/api";
import RankTitle from "./RankTitle";
import Rank from "./Rank";
import * as Ranks from "./style";
import Skeletons from "./Skeleton";

function RankPage() {
  const [myRank, setMyRank] = useState({});
  const [userRank, setUserRank] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRank = async () => {
    setLoading(true);
    const rankData = await api.getRank();

    if (rankData.success) {
      setMyRank(rankData.data.myRank);
      setUserRank(rankData.data.userRank);
    }
    setLoading(false);
  };

  useEffect(() => {
    getRank();
  }, []);

  return (
    <Container>
      <RankTitle />
      <Ranks.ResponsiveDiv>
        {loading ? (
          <Skeletons />
        ) : (
          <Rank
            myRanking
            imgURL={myRank.avatarUrl}
            id={myRank.username}
            point={myRank.totalScore}
          />
        )}

        {loading ? (
          <Ranks.ResponsivUserRankWrapper>
            <Skeletons />
            <Skeletons />
            <Skeletons />
          </Ranks.ResponsivUserRankWrapper>
        ) : (
          <Ranks.ResponsivUserRankWrapper>
            {userRank.map((it) => (
              <Rank
                key={`${it.username}-${it.rank}-${it.totalScore}`}
                ranking={it.rank}
                imgURL={it.avatarUrl}
                id={it.username}
                point={it.totalScore}
                rank={it.rank}
              />
            ))}
          </Ranks.ResponsivUserRankWrapper>
        )}
      </Ranks.ResponsiveDiv>
    </Container>
  );
}
export default RankPage;
