import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  border: 1px solid rgba(119, 119, 119, 0.4);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  margin-top: 16px;
  display: flex;
`;

export const TitleText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.darkGray};
`;

export const ScoreContainer = styled.div`
  display: flex;
  margin-top: 29px;
`;
export const SubTitle = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.lightGray};
  margin-bottom: 11px;
`;

export const Score = styled.p`
  font-size: 24px;
`;

export const ScoreCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  + div {
    margin-left: 120px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const DivideLine = styled.div`
  width: 100%;
  height: 0.25px;
  background-color: rgba(119, 119, 119, 0.4);
`;
export const RepoWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const RepoName = styled.p`
  margin-top: 10px;
  font-size: 12px;
  color: ${(props) => props.theme.lightGray};
  margin-bottom: 7px;
`;

export const VerticalLine = styled.div`
  width: 20px;
  height: 15px;
  position: absolute;
  top: -13px;
  left: 3.76px;
  border-left: 1px #777777 solid;
  border-opacity: 0.2px;
`;
export const CommitWrapper = styled.div`
  margin-left: 6px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  margin-bottom: 14px;
`;
export const LineWrapper = styled.div`
  display: flex;
  svg {
    position: absolute;
    top: -17px;
    left: 3.76px;
  }
`;
export const CommitMessage = styled.p`
  font-size: 12px;
  color: ${(props) => (props.time ? props.theme.mainColor : "#535353")};
  margin-right: ${(props) => props.time && "6px"};
  width: ${(props) => props.time && "30px"};
  text-align: center;
  svg {
    margin-right: 2px;
  }
`;

export const NoCommit = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.lightGray};

  height: 214px;
  line-height: 214px;
`;
