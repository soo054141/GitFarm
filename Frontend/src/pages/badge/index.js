import React, { useLayoutEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import * as api from "@/api";
import LoadingModal from "@/components/LoadingModal";
import { AllBadgesFuncion } from "@/utils/badge";
import * as Icon from "@/utils/badgesIcon";
import SeedIcon from "../../assets/icon/header/seeds.svg";
import * as Badges from "./style";
import Lock from "../../assets/icon/lock.svg";

function Badge({ badgesType }) {
  const [loading, setLoading] = useState(false);
  const [userBadges, setUserBadges] = useState([]);

  const getUserBadges = async () => {
    setLoading(true);
    const [badgeData, mypageData, rankData] = await Promise.all([
      api.getUserBadges(),
      api.getMyInfo(),
      api.getRank(),
    ]);
    const newUserBadges = await AllBadgesFuncion(
      badgeData.badge,
      mypageData.mypage,
      rankData.data,
    );
    api.postBadges(newUserBadges);
    setUserBadges(newUserBadges);
    setLoading(false);
  };

  useLayoutEffect(() => {
    getUserBadges();
  }, []);

  const userBadgesTurnTrue = () => {
    const newBadges = badgesType.map((badges) => {
      if (userBadges[badges.id] === true) {
        return { ...badges, userHaveBadge: true };
      }
      return badges;
    });
    return newBadges;
  };

  const trueBadge = useMemo(() => userBadgesTurnTrue(), [userBadges]);
  return (
    <Badges.Container>
      <Badges.IconWrapper>
        <SeedIcon />
      </Badges.IconWrapper>
      <Badges.Text>열심히 커밋 하여 다양한 배지를 모아보세요!</Badges.Text>
      <Badges.BadgeCollections>
        {!loading ? (
          trueBadge.map((badge) => (
            <Badges.PerBadge key={`${badge.id}-${badge.title}`}>
              {badge.userHaveBadge ? badge.icon : <Lock />}
              <p>{badge.title}</p>
            </Badges.PerBadge>
          ))
        ) : (
          <LoadingModal />
        )}
      </Badges.BadgeCollections>
    </Badges.Container>
  );
}

Badge.defaultProps = {
  badgesType: [
    {
      id: 0,
      title: "커밋 500개 달성",
      icon: Icon.achievement500,
      userHaveBadge: false,
    },
    {
      id: 1,
      title: "커밋 1000개 달성",
      icon: Icon.achievement1000,
      userHaveBadge: false,
    },
    {
      id: 2,
      title: "커밋 5000개 달성",
      icon: Icon.achievement5000,
      userHaveBadge: false,
    },

    { id: 3, title: "랭킹 1위", icon: Icon.ranking1, userHaveBadge: false },
    { id: 4, title: "랭킹 2위", icon: Icon.ranking2, userHaveBadge: false },
    { id: 5, title: "랭킹 3위", icon: Icon.ranking3, userHaveBadge: false },

    {
      id: 6,
      title: "7일 연속 커밋 달성",
      icon: Icon.days7,
      userHaveBadge: false,
    },
    {
      id: 7,
      title: "2주 연속 커밋 달성",
      icon: Icon.days14,
      userHaveBadge: false,
    },
    {
      id: 8,
      title: "3주 연속 커밋 달성",
      icon: Icon.days21,
      userHaveBadge: false,
    },
    {
      id: 9,
      title: "4주 연속 커밋 달성",
      icon: Icon.days28,
      userHaveBadge: false,
    },

    { id: 10, title: "씨앗 레벨", icon: Icon.level1, userHaveBadge: false },
    { id: 11, title: "초보 농부", icon: Icon.level2, userHaveBadge: false },
    { id: 12, title: "중수 농부", icon: Icon.level3, userHaveBadge: false },
    { id: 13, title: "고수 농부", icon: Icon.level4, userHaveBadge: false },
    { id: 14, title: "팜 마스터", icon: Icon.level5, userHaveBadge: false },
  ],
};

Badge.propTypes = {
  badgesType: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      icon: PropTypes.element,
      userHaveBadge: PropTypes.bool,
    }),
  ),
};

export default Badge;
