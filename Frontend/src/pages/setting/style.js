import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 117px;
  color: ${(props) => props.theme.darkGray};
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 800;
  color: ${(props) => props.theme.darkGray};
  text-align: center;
  margin-bottom: 33px;
`;

export const Wrapper = styled.div`
  width: 350px;

  @media ${({ theme }) => theme.device.laptop} {
    width: 850px;
    padding: 0;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 200px;
  padding: 23px;
  border-radius: 10px;
  background-color: #ffffff;

  @media ${({ theme }) => theme.device.laptop} {
    width: 850px;
    margin-top: 100px;
  }
`;
