import React, { useLayoutEffect, useMemo, useState } from "react";
import * as api from "@/api";
import LoadingModal from "@/components/LoadingModal";
import { AllBadgesFuncion } from "@/utils/badge";
import * as BadgeType from "@/utils/badgesIcon";
import SeedIcon from "../../assets/icon/header/seeds.svg";
import * as Badges from "./style";
import Lock from "../../assets/icon/lock.svg";

function Badge() {
  const [loading, setLoading] = useState(false);
  const [userBadges, setUserBadges] = useState([]);

  const getUserBadges = async () => {
    setLoading(true);
    const [badgeData, mypageData, rankData] = await Promise.allSettled([
      api.getUserBadges(),
      api.getMyInfo(),
      api.getRank(),
    ]);
    const { newUserBadges, newBadges } = await AllBadgesFuncion(
      badgeData.value.badge,
      mypageData.value.mypage,
      rankData.value.data,
    );

    if (newBadges.length !== 0) {
      api.postBadges(newUserBadges);
    }

    setUserBadges(newUserBadges);
    setLoading(false);
  };

  const userBadgesTurnTrue = () => {
    const newBadges = BadgeType.badgesType.map((badges) => {
      if (userBadges[badges.id] === true) {
        return { ...badges, userHaveBadge: true };
      }
      return badges;
    });
    return newBadges;
  };

  useLayoutEffect(() => {
    getUserBadges();
  }, []);

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

export default Badge;
