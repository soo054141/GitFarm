import React from "react";
import * as Ranks from "./style";
import ExampleProfile from "./example.svg";

export function OtherUserRanks({ ranking, id, point, newEntry }) {
  return (
    <Ranks.Container>
      <Ranks.Ranking>{ranking}</Ranks.Ranking>
      <ExampleProfile />
      <Ranks.Detail>
        <Ranks.Id>user{id}</Ranks.Id>
        <Ranks.Point>{point} P</Ranks.Point>
      </Ranks.Detail>
      {newEntry && (
        <Ranks.newUser>
          <p>new</p>
          <span>▲</span>
        </Ranks.newUser>
      )}
    </Ranks.Container>
  );
}
