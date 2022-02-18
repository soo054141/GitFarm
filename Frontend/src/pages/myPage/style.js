import styled from "styled-components";

export const GoalSettigWrapper = styled.div`
  margin-top: 70px;
`;

export const ResponsiveDiv = styled.div`
  width: 350px;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
  @media ${({ theme }) => theme.device.laptop} {
    width: 850px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
