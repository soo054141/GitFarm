import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 23px;
  box-shadow: 0 14px 28px rgb(0 0 0 / 0%), 0 10px 10px rgb(0 0 0 / 3%);
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 63px;
  right: 20px;
`;

export const Title = styled.h5`
  font-size: 13.55px;
  margin-left: 24px;
  padding-top: 26px;
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

export const LineGraphContainer = styled.div`
  height: 100%;
`;
