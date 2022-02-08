import React from "react";
import { Description } from "@/components";
import { Modal } from "@/components";
import { Wrapper } from "./style";
import * as Icon from "@/components/Badge/BadgesIconComponents";

CollectedBadgeModal.defaultProps = {
  GainedBadges: [
    {
      id: 0,
      title: "가입 후 첫 커밋 축하",
      icon: Icon.firstCommit,
      userHaveBadge: false,
    },
    {
      id: 2,
      title: "2주 연속 커밋 달성",
      icon: Icon.days14,
      userHaveBadge: false,
    },
  ],
};

export function CollectedBadgeModal({ setOpenModal, GainedBadges }) {
  return (
    <Modal setOpenModal={setOpenModal} title="배지 획득 안내">
      <Wrapper>
        {GainedBadges[0].icon}
        <Description big>
          축하합니다!
          <br />[{GainedBadges[0].title}]
          <br />
          {GainedBadges.length > 1 && `외 ${GainedBadges.length - 1}개의 `}
          배지를 획득하셨습니다!
        </Description>
        <Description>
          획득하신 배지를 확인하시려면 오른쪽 상단 씨앗을 눌러주세요.
        </Description>
      </Wrapper>
    </Modal>
  );
}
