import React from "react";
import { Container } from "./style";
import { RankTitle } from "../../components/Rank/RankTitle";
import { MyRankComponent } from "../../components/Rank/MyRank";
import { OtherUserRanks } from "../../components/Rank/OtherUserRanks";

export function RankPage() {
  return (
    <Container>
      <RankTitle />
      <MyRankComponent ranking="256" id="MyId" point="300" />
      <OtherUserRanks ranking="1" id="A" point="1,400" />
      <OtherUserRanks ranking="2" id="B" point="1,300" />
      <OtherUserRanks ranking="3" id="C" point="1,200" />
      <OtherUserRanks ranking="4" id="D" point="1,100" />
      <OtherUserRanks ranking="5" id="E" point="1,000" />
    </Container>
  );
}
