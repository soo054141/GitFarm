import React, { useState } from "react";
import InfoIcon from "@/assets/icon/info.svg";
import CommitCircleIcon from "@/assets/icon/commit-circle.svg";
import VerticalLineIcon from "@/assets/icon/vertical-line.svg";
import PropTypes from "prop-types";
import ScoreInformationModal from "../ScoreInformationModal";
import * as CommitDetail from "./style";

function CommitDetails({ score, totalCommit, commitsPerRepo }) {
  const [openModal, setOpenModal] = useState(false);

  const modalOpenHandler = () => {
    setOpenModal(!openModal);
  };

  return (
    <CommitDetail.Container>
      {totalCommit > 0 ? (
        <>
          <CommitDetail.ScoreContainer>
            <CommitDetail.ScoreCell>
              <CommitDetail.SubTitle>
                얻은 점수
                <CommitDetail.IconWrapper>
                  <InfoIcon onClick={modalOpenHandler} />
                </CommitDetail.IconWrapper>
              </CommitDetail.SubTitle>
              <CommitDetail.Score>{score}</CommitDetail.Score>
            </CommitDetail.ScoreCell>
            <CommitDetail.ScoreCell>
              <CommitDetail.SubTitle>총 커밋 수</CommitDetail.SubTitle>
              <CommitDetail.Score>{totalCommit}</CommitDetail.Score>
            </CommitDetail.ScoreCell>
          </CommitDetail.ScoreContainer>
          <CommitDetail.DetailsContainer>
            <CommitDetail.RepoContainer>
              <CommitDetail.SubTitle>커밋 상세 내역</CommitDetail.SubTitle>
              {commitsPerRepo.map((commits) => (
                <CommitDetail.RepoWrapper key={`${commits.repoName}`}>
                  <CommitDetail.RepoName key={`${commits.repoName}`}>
                    {commits.gitHubId}/{commits.repoName}
                  </CommitDetail.RepoName>

                  {commits.commitMessages.map((commit, idx) => (
                    <CommitDetail.CommitWrapper
                      key={`${commit.message}-${commit.time}`}
                    >
                      <div>
                        {idx > 0 && (
                          <CommitDetail.LineWrapper
                            key={`${commit.message}--${commit.time}`}
                          >
                            <VerticalLineIcon
                              key={`${commit.message}---${commit.time}`}
                            />
                          </CommitDetail.LineWrapper>
                        )}
                        <CommitDetail.CommitMessage
                          key={`${commit.message}----${commit.time}`}
                        >
                          <CommitCircleIcon />
                          {commit.message}
                        </CommitDetail.CommitMessage>
                      </div>
                      <CommitDetail.CommitMessage
                        time
                        key={`${commit.message}----${commit.time}`}
                      >
                        {commit.time}
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
  score: 10,
  totalCommit: 12,
  commitsPerRepo: [
    {
      gitHubId: "GitHub-Id",
      repoName: "repo-name1",
      commitMessages: [
        { message: "Add commit message", time: "22:12" },
        { message: "Fix commit message", time: "21:04" },
        { message: "Fix commit message", time: "20:23" },
        { message: "Fix commit message", time: "19:32" },
      ],
    },
    {
      gitHubId: "GitHub-Id",
      repoName: "repo-name2",
      commitMessages: [
        { message: "Add commit message", time: "22:30" },
        { message: "Fix commit message", time: "21:44" },
        { message: "Fix commit message", time: "20:39" },
        { message: "Fix commit message", time: "19:24" },
      ],
    },
    {
      gitHubId: "GitHub-Id",
      repoName: "repo-name3",
      commitMessages: [
        { message: "Add commit message", time: "22:11" },
        { message: "Fix commit message", time: "21:22" },
        { message: "Fix commit message", time: "20:33" },
        { message: "Fix commit message", time: "19:44" },
      ],
    },
  ],
};

CommitDetails.propTypes = {
  score: PropTypes.number,
  totalCommit: PropTypes.number,
  commitsPerRepo: PropTypes.arrayOf(
    PropTypes.shape({
      gitHubId: PropTypes.string.isRequired,
      repoName: PropTypes.string.isRequired,
      commitMessages: PropTypes.arrayOf(
        PropTypes.shape({
          message: PropTypes.string.isRequired,
          time: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ),
};

export default CommitDetails;
