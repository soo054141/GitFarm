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
    } else {
      setMyRank(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    getRank();
  }, []);

  return (
    <Container>
      <RankTitle />
      {myRank ? (
        <Ranks.ResponsiveDiv>
          {loading ? (
            <Skeletons />
          ) : (
            <Rank
              myRanking
              imgURL={myRank.avatarUrl}
              id={myRank.username}
              point={myRank.totalScore}
              rank={myRank.rank}
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
                  imgURL={it.avatarUrl}
                  id={it.username}
                  point={it.totalScore}
                  rank={it.rank}
                />
              ))}
            </Ranks.ResponsivUserRankWrapper>
          )}
        </Ranks.ResponsiveDiv>
      ) : (
        <Ranks.NoData>데이터가 없습니다.</Ranks.NoData>
      )}
    </Container>
  );
}
export default RankPage;
