import React from "react";
import PropTypes from "prop-types";
import * as CommitInfo from "./style";

function CommitCount({ total, continues }) {
  return (
    <CommitInfo.Wrapper>
      <CommitInfo.Counter>
        <CommitInfo.Title>Total</CommitInfo.Title>
        <CommitInfo.Count>{total.toLocaleString()}</CommitInfo.Count>
      </CommitInfo.Counter>
      <CommitInfo.Divider />
      <CommitInfo.Counter>
        <CommitInfo.Title>Longest</CommitInfo.Title>
        <CommitInfo.Count>{continues} days</CommitInfo.Count>
      </CommitInfo.Counter>
    </CommitInfo.Wrapper>
  );
}

CommitCount.propTypes = {
  total: PropTypes.number.isRequired,
  continues: PropTypes.number.isRequired,
};

export default CommitCount;
