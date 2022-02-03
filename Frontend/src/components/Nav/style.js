import styled from "styled-components";
import HomeIcon from "../../assets/icon/nav/home_nav.svg";

export const NavWrapper = styled.nav`
  padding: 0 25px;
  background-color: white;
`;

export const Home = styled(HomeIcon)`
  bottom: 17px;
  position: relative;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 60px;
`;

export const NavItem = styled.li``;
