import React from "react";
import * as CommitDetail from "./style";
import CommitIcon from "../../assets/icon/commit.svg";
import CommitCircleIcon from "../../assets/icon/commit-circle.svg";
import VerticalLineIcon from "../../assets/icon/vertical-line.svg";
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

export function CommitDetails({ score, totalCommit, commitsPerRepo }) {
  return (
    <CommitDetail.Container>
      {totalCommit > 0 ? (
        <>
          <CommitDetail.Title>
            <CommitIcon />
            <CommitDetail.TitleText>오늘의 커밋</CommitDetail.TitleText>
          </CommitDetail.Title>
          <CommitDetail.ScoreContainer>
            <CommitDetail.ScoreCell>
              <CommitDetail.SubTitle>얻은 점수</CommitDetail.SubTitle>
              <CommitDetail.Score>+{score}</CommitDetail.Score>
            </CommitDetail.ScoreCell>
            <CommitDetail.ScoreCell>
              <CommitDetail.SubTitle>총 커밋 수</CommitDetail.SubTitle>
              <CommitDetail.Score>+{totalCommit}</CommitDetail.Score>
            </CommitDetail.ScoreCell>
          </CommitDetail.ScoreContainer>
          <CommitDetail.DetailsContainer>
            <CommitDetail.SubTitle>커밋 상세 내역</CommitDetail.SubTitle>
            <CommitDetail.DivideLine />

            {commitsPerRepo.map((commits, idx) => (
              <CommitDetail.RepoWrapper key={`${commits.repoName}-${idx}`}>
                <CommitDetail.RepoName key={`${commits.repoName}/${idx}`}>
                  {commits.gitHubId}/{commits.repoName}
                </CommitDetail.RepoName>

                {commits.commitMessages.map((commit, idx) => (
                  <CommitDetail.CommitWrapper
                    key={`${commit.message}-${commit.time}-${idx}`}
                  >
                    <div>
                      {idx > 0 && (
                        <CommitDetail.LineWrapper
                          key={`${commit.message}-${idx}-${commit.time}`}
                        >
                          <VerticalLineIcon
                            key={`${commit.message}-${idx}--${commit.time}`}
                          />
                        </CommitDetail.LineWrapper>
                      )}
                      <CommitDetail.CommitMessage
                        key={`${commit.message}-${idx}---${commit.time}`}
                      >
                        <CommitCircleIcon />
                        {commit.message}
                      </CommitDetail.CommitMessage>
                    </div>
                    <CommitDetail.CommitMessage
                      time
                      key={`${commit.message}-${idx}----${commit.time}`}
                    >
                      {commit.time}
                    </CommitDetail.CommitMessage>
                  </CommitDetail.CommitWrapper>
                ))}
              </CommitDetail.RepoWrapper>
            ))}
          </CommitDetail.DetailsContainer>
        </>
      ) : (
        <CommitDetail.NoCommit>커밋 기록이 없습니다!</CommitDetail.NoCommit>
      )}
    </CommitDetail.Container>
  );
}
