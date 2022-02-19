import React, { useState } from "react";
import PropTypes from "prop-types";
import { convertKST } from "@/utils/time";
import InfoIcon from "@/assets/icon/info.svg";
import CommitIcon from "@/assets/icon/commitIcon.svg";
import ScoreInformationModal from "../ScoreInformationModal";
import * as CommitDetail from "./style";

function CommitDetails({ todayScore, todayCommit, detail }) {
  const [openModal, setOpenModal] = useState(false);

  const modalOpenHandler = () => {
    setOpenModal(!openModal);
  };

  return (
    <CommitDetail.Container>
      {todayCommit > 0 ? (
        <>
          <CommitDetail.ScoreContainer>
            <CommitDetail.ScoreCell>
              <CommitDetail.SubTitle>얻은 점수</CommitDetail.SubTitle>
              <CommitDetail.IconWrapper>
                <InfoIcon onClick={modalOpenHandler} />
              </CommitDetail.IconWrapper>
              <CommitDetail.Score length={String(todayScore).length}>
                {todayScore}
              </CommitDetail.Score>
            </CommitDetail.ScoreCell>
            <CommitDetail.ScoreCell>
              <CommitDetail.SubTitle>총 커밋 수</CommitDetail.SubTitle>
              <CommitDetail.Score length={String(todayCommit).length}>
                {todayCommit}
              </CommitDetail.Score>
            </CommitDetail.ScoreCell>
          </CommitDetail.ScoreContainer>
          <CommitDetail.DetailsContainer>
            <CommitDetail.RepoContainer>
              <CommitDetail.SubTitle>커밋 상세 내역</CommitDetail.SubTitle>
              {detail.map((commits) => (
                <CommitDetail.RepoWrapper key={`${commits.info.repo}`}>
                  <CommitDetail.RepoName key={`${commits.info.repo}`}>
                    {commits.info.name}/{commits.info.repo}
                  </CommitDetail.RepoName>

                  {commits.data.map((el) => (
                    <CommitDetail.CommitWrapper
                      key={`${el.message}-${el.date}`}
                    >
                      <div>
                        <CommitDetail.CommitMessage
                          key={`${el.message}----${el.date}`}
                        >
                          <CommitIcon />
                          {el.message}
                        </CommitDetail.CommitMessage>
                      </div>
                      <CommitDetail.CommitMessage
                        time
                        key={`${el.message}----${el.date}`}
                      >
                        {convertKST(el.date)}
                      </CommitDetail.CommitMessage>
                    </CommitDetail.CommitWrapper>
                  ))}
                </CommitDetail.RepoWrapper>
              ))}
            </CommitDetail.RepoContainer>
          </CommitDetail.DetailsContainer>
        </>
      ) : (
        <CommitDetail.NoCommit>커밋 기록이 없습니다!</CommitDetail.NoCommit>
      )}
      {openModal && <ScoreInformationModal setOpenModal={setOpenModal} />}
    </CommitDetail.Container>
  );
}

CommitDetails.defaultProps = {
  todayScore: 10,
  todayCommit: 12,
  detail: [
    {
      info: {
        name: "YWTechIT",
        repo: "alice-sw-engineer-track",
      },
      data: [
        {
          date: "2022-01-20T13:33:11Z",
          message: "63일차 1.20.목. 실시간 강의",
        },
      ],
    },
    {
      info: {
        name: "YWTechIT",
        repo: "ci-cd-practice",
      },
      data: [
        {
          date: "2022-01-20T07:38:42Z",
          message: "Fix typo",
        },
        {
          date: "2022-01-20T07:29:57Z",
          message: "Add Heroku actions",
        },
        {
          date: "2022-01-20T06:41:25Z",
          message: "Fix typo",
        },
        {
          date: "2022-01-20T06:32:27Z",
          message: "Fix blanks",
        },
        {
          date: "2022-01-20T06:31:25Z",
          message: "Add actions",
        },
        {
          date: "2022-01-20T06:24:46Z",
          message: "Add 단계별 build",
        },
        {
          date: "2022-01-20T06:22:28Z",
          message: "Add ci command",
        },
      ],
    },
    {
      info: {
        name: "YWTechIT",
        repo: "custombucks-api",
      },
      data: [
        {
          date: "2022-01-20T23:11:15Z",
          message: "Update README",
        },
        {
          date: "2022-01-20T22:16:40Z",
          message: "Add comment cron",
        },
        {
          date: "2022-01-20T22:08:53Z",
          message: "Add heroku-awake action",
        },
      ],
    },
    {
      info: {
        name: "YWTechIT",
        repo: "ywBot",
      },
      data: [
        {
          date: "2022-01-20T15:24:45Z",
          message: "Update README.md",
        },
      ],
    },
  ],
};

CommitDetails.propTypes = {
  todayScore: PropTypes.number,
  todayCommit: PropTypes.number,
  detail: PropTypes.arrayOf(
    PropTypes.shape({
      info: PropTypes.shape({
        name: PropTypes.string.isRequired,
        repo: PropTypes.string.isRequired,
      }),
      data: PropTypes.arrayOf(
        PropTypes.shape({
          date: PropTypes.string.isRequired,
          message: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ),
};

export default CommitDetails;
