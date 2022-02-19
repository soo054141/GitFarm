import styled from "styled-components";

export const Container = styled.div`
  background: white;
  width: 350px;
  height: 215px;
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 0%), 0 10px 10px rgb(0 0 0 / 3%);

  @media ${({ theme }) => theme.device.laptop} {
    height: 350px;
    margin-left: 120px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 9px;
  margin-left: 38px;
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
    margin-top: 126px;

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
  margin-bottom: 10px;
`;

export const PieWrapper = styled.div`
  margin-left: 16px;
  @media ${({ theme }) => theme.device.laptop} {
    position: relative;
    bottom: 25px;
    right: 20px;
  }
`;

export const LangText = styled.span`
  font-size: 12px;
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

export const PieChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
