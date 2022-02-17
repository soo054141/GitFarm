import styled from "styled-components";
import HomeIcon from "../../assets/icon/nav/home_nav.svg";
import GitFarmLogoIcon from "../../assets/icon/login/GitFarmLogo.svg";

export const Container = styled.nav`
  padding: 0 25px;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 90;

  @media ${({ theme }) => theme.device.laptop} {
    display: none;
  }
`;

export const Home = styled(HomeIcon)`
  bottom: 17px;
  position: relative;
  left: -15px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 60px;

  @media ${({ theme }) => theme.device.laptop} {
    display: flex;
    align-items: center;
  }
`;

export const Item = styled.li`
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 18px;
    margin: 0 30px;
    padding: 0.5rem 1rem;

    @media (max-width: 1200px) {
      margin: 0 18px;
      padding: 0;
    }
  }
`;

export const String = styled.span`
  @media ${({ theme }) => theme.device.laptop} {
    font-size: 18px;
    color: ${({ theme }) => theme.darkGray};
  }

  @media (max-width: 1300px) {
    font-size: 15px;
  }
`;

export const LogoTitle = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: ${({ theme }) => theme.mainColor};
`;

export const ResponsiveHeader = styled.header`
  display: none;
  @media ${({ theme }) => theme.device.laptop} {
    display: block;
    position: fixed;
    bottom: auto;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.backgroundColor};
    box-shadow: 0 2px 5px -4px #333;
    z-index: 90;
  }
`;

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  max-width: 1700px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
`;

export const ResponsiveLogo = styled.h1`
  height: 74px;
  margin-bottom: 0;
  display: flex;
  align-items: center;
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const GitFarmLogo = styled(GitFarmLogoIcon)`
  width: 74px;
  height: auto;
  top: -6px;
  position: relative;
`;

export const ResponsiveNav = styled.nav``;
