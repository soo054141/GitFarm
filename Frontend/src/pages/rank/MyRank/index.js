import React from "react";
import PropTypes from "prop-types";
import * as MyRanks from "./style";

function MyRankComponent({ ranking, id, point }) {
  return (
    <MyRanks.Container>
      <h1>나의 순위</h1>
      <MyRanks.MyRanking>
        <MyRanks.ProfileImg />
        <MyRanks.Detail>
          <MyRanks.Id>{id}</MyRanks.Id>
          <MyRanks.Point>{point} p</MyRanks.Point>
        </MyRanks.Detail>
        <MyRanks.Ranking>{ranking}</MyRanks.Ranking>
      </MyRanks.MyRanking>
    </MyRanks.Container>
  );
}
MyRankComponent.propTypes = {
  ranking: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  point: PropTypes.string.isRequired,
};
export default MyRankComponent;
