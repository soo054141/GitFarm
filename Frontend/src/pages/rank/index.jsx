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
      <Ranks.ResponsiveDiv>
        {loading && (
          <>
            <Skeletons />
            <Ranks.ResponsivUserRankWrapper>
              <Skeletons />
              <Skeletons />
              <Skeletons />
            </Ranks.ResponsivUserRankWrapper>
          </>
        )}

        {!loading && (
          <>
            {myRank && (
              <Rank
                myRanking
                imgURL={myRank.avatarUrl}
                id={myRank.username}
                point={myRank.totalScore}
                rank={myRank.rank}
              />
            )}
            {!myRank && <Ranks.NoData>데이터가 없습니다.</Ranks.NoData>}

            <Ranks.ResponsivUserRankWrapper>
              {userRank.length > 0 &&
                userRank.map((it, idx) =>
                  idx <= 9 ? (
                    <Rank
                      key={`${it.username}-${it.rank}-${it.totalScore}`}
                      imgURL={it.avatarUrl}
                      id={it.username}
                      point={it.totalScore}
                      rank={it.rank}
                    />
                  ) : (
                    ""
                  ),
                )}
              {!userRank.length && (
                <Ranks.NoData>데이터가 없습니다.</Ranks.NoData>
              )}
            </Ranks.ResponsivUserRankWrapper>
          </>
        )}
      </Ranks.ResponsiveDiv>
    </Container>
  );
}
export default RankPage;
