import styled from "styled-components";

export const Container = styled.div`
  width: 350px;

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
  margin-top: 20px;
  width: 100%;
`;
export const SubTitle = styled.p`
  font-size: 13px;
  color: ${(props) => props.theme.darkGray};

  margin-left: 10px;
  margin-top: 14px;
`;

export const ScoreCell = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  + div {
    margin-left: 27px;
  }
`;

export const Score = styled.p`
  font-size: 48px;
  font-weight: 300;
  color: ${(props) => props.theme.mainColor};
  margin-left: 100px;
  margin-top: -10px;
  margin-bottom: 10px;
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

export const RepoContainer = styled.div`
  background-color: white;
  width: 350px;
  border-radius: 10px;
`;
export const RepoWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
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
