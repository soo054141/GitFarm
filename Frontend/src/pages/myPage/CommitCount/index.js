import React from "react";
import PropTypes from "prop-types";
import * as CommitInfo from "./style";

function CommitCount({ total, continuous }) {
  return (
    <CommitInfo.Wrapper>
      <CommitInfo.Counter>
        <CommitInfo.Title>Total</CommitInfo.Title>
        <CommitInfo.Count>{total.toLocaleString()}</CommitInfo.Count>
      </CommitInfo.Counter>
      <CommitInfo.Divider />
      <CommitInfo.Counter>
        <CommitInfo.Title>Longest</CommitInfo.Title>
        <CommitInfo.Count>{continuous} days</CommitInfo.Count>
      </CommitInfo.Counter>
    </CommitInfo.Wrapper>
  );
}

CommitCount.propTypes = {
  total: PropTypes.number.isRequired,
  continuous: PropTypes.number.isRequired,
};

export default CommitCount;
