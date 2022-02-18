import styled from "styled-components";
import GoldIcon from "@/assets/icon/rank/gold.svg";
import SilverIcon from "@/assets/icon/rank/silver.svg";
import BronzeIcon from "@/assets/icon/rank/bronze.svg";

export const Container = styled.div`
  width: 349px;
  margin-top: 32px;
  padding: ${({ myRank }) => (myRank ? "22px" : "28px")} 17px;
  border-radius: 10px;
  background: #ffffff;
  position: relative;

  @media ${({ theme }) => theme.device.laptop} {
    width: 430px;
  }
`;

export const Gold = styled(GoldIcon)`
  position: absolute;
  left: 90px;
`;

export const Silver = styled(SilverIcon)`
  position: absolute;
  left: 90px;
`;

export const Bronze = styled(BronzeIcon)`
  position: absolute;
  left: 90px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ myRank }) =>
    myRank ? "1fr 210px 1fr" : "30px 60px 150px 50px;"};
  margin-top: ${({ myRank }) => (myRank ? "20px" : "0px")};
  align-items: center;
  margin-left: ${({ myRank }) => (myRank ? "" : "12px")};
  overflow-wrap: break-word;
`;

export const MyRankTitle = styled.h1`
  font-size: 14px;
  color: ${(props) => props.theme.darkGray};
`;

export const Ranking = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => props.theme.darkGray};
`;

export const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${({ imgURL }) => imgURL});
  background-size: 100%;
  border-radius: 50px;
`;

export const Detail = styled.div`
  margin-right: 20px;
`;

export const Id = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const Point = styled.div`
  font-size: 8px;
  margin-top: 5px;
  color: ${(props) => props.theme.lightGray};
`;

export const NewUser = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 10px;
  border-radius: 5px;
  text-align: center;
  background-color: rgba(106, 189, 140, 0.24);
  p {
    color: ${(props) => props.theme.lightGray};
  }

  span {
    color: ${(props) => props.theme.mainColor};
  }
`;
