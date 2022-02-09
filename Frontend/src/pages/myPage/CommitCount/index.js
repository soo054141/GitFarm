import React from "react";
import * as CommitInfo from "./style";

export function CommitCount() {
  return (
    <CommitInfo.Wrapper>
      <CommitInfo.Counter>
        <CommitInfo.Title>Total</CommitInfo.Title>
        <CommitInfo.Count>4,116</CommitInfo.Count>
      </CommitInfo.Counter>
      <CommitInfo.Divider />
      <CommitInfo.Counter>
        <CommitInfo.Title>Longest</CommitInfo.Title>
        <CommitInfo.Count>43 days</CommitInfo.Count>
      </CommitInfo.Counter>
    </CommitInfo.Wrapper>
  );
}
