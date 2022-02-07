import React from "react";
import * as Ranks from "./style";

export function OtherUserRanks({ ranking, id, point }) {
  return (
    <Ranks.Container>
      <Ranks.Ranking>{ranking}</Ranks.Ranking>
      <Ranks.Detail>
        <Ranks.Id>user{id}</Ranks.Id>
        <Ranks.Point>{point} P</Ranks.Point>
      </Ranks.Detail>
    </Ranks.Container>
  );
}
