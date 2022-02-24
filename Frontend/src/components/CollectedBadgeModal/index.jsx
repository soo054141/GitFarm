import React from "react";
import * as Icon from "@/components/Badge/BadgesIconComponents";
import PropTypes from "prop-types";
import Modal from "@/components/Modal";
import Description from "@/components/Description";
import { Wrapper, Body } from "./style";

function CollectedBadgeModal({ setOpenModal, GainedBadges }) {
  return (
    <Modal setOpenModal={setOpenModal} title="배지 획득 안내">
      <Wrapper>
        {GainedBadges[0].icon}
        <Body>
          축하합니다!
          <br />[{GainedBadges[0].title}]
          <br />
          {GainedBadges.length > 1 && `외 ${GainedBadges.length - 1}개의 `}
          배지를 획득하셨습니다!
        </Body>
        <Description>
          획득하신 배지를 확인하시려면 오른쪽 상단 씨앗을 눌러주세요.
        </Description>
      </Wrapper>
    </Modal>
  );
}

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

CollectedBadgeModal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  GainedBadges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      userHaveBadge: PropTypes.bool.isRequired,
    }),
  ),
};
export default CollectedBadgeModal;
