import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;
export const IconWrapper = styled.div`
  margin-top: 50px;
  svg {
    width: 84px;
    height: 100%;
  }
  @media ${({ theme }) => theme.device.laptop} {
    margin-top: 100px;
    svg {
      width: 54px;
      height: 100%;
    }
  }
`;
export const Text = styled.p`
  color: ${(props) => props.theme.darkGray};
  font-weight: 700;
  margin-top: 28px;
  font-size: 13px;
  margin-bottom: 40px;
`;

export const BadgeCollections = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  width: 79.49%;
  column-gap: 5px;
  row-gap: 10px;
  @media ${({ theme }) => theme.device.laptop} {
    margin-top: 30px;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 20px;
    row-gap: 20px;
  }
`;

export const PerBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 111px;
  p {
    color: ${(props) => props.theme.darkGray};
    font-size: 10px;
    margin-top: 15px;
  }
  svg {
    width: 50px;
    height: 50px;
  }
  @media ${({ theme }) => theme.device.laptop} {
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;
