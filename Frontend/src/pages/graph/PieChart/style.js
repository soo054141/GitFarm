import styled from "styled-components";

export const Container = styled.div`
  background: white;
  width: 350px;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;

  @media ${({ theme }) => theme.device.laptop} {
    height: 350px;
    margin-left: 120px;
  }
`;

export const Wrapper = styled.div`
  margin-left: 20px;
  margin-top: 14px;
`;

export const Heading = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h5`
  font-size: 14px;
  color: ${(props) => props.theme.darkGray};
  margin-bottom: 10px;
`;

export const Description = styled.span`
  font-size: 9px;
  color: ${(props) => props.theme.lightGray};
`;

export const RatioWrapper = styled.div`
  @media ${({ theme }) => theme.device.laptop} {
    margin-top: 150px;

    > div {
      line-height: 1.4;
    }
  }
`;

export const LangColorBox = styled.div`
  background-color: ${({ idx }) => idx};
  width: 12.5px;
  height: 12.5px;
  border-radius: 50%;
  margin-right: 7px;
`;

export const LangColorBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;

export const PieWrapper = styled.div`
  @media ${({ theme }) => theme.device.laptop} {
    position: relative;
    top: 25px;
    right: 20px;
  }
`;

export const LangText = styled.span`
  font-size: 9px;
  color: ${(props) => props.theme.lightGray};
  margin-right: 7px;

  @media ${({ theme }) => theme.device.laptop} {
    font-size: 14px;
  }
`;

export const NoData = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 15px;
  color: ${(props) => props.theme.darkGray};
`;
