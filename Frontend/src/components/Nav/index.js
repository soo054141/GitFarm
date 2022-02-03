import React from "react";
import styled from "styled-components";
import Calender from "../../assets/icon/nav/calender_nav.svg";
import Rranking from "../../assets/icon/nav/ranking_nav.svg";
import HomeIcon from "../../assets/icon/nav/home_nav.svg";
import Graph from "../../assets/icon/nav/graph_nav.svg";
import Mypage from "../../assets/icon/nav/mypage_nav.svg";
import { Link } from "react-router-dom";

const NavWrapper = styled.nav`
  padding: 0 25px;
  background-color: white;
`;

const Home = styled(HomeIcon)`
  bottom: 17px;
  position: relative;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 60px;
`;

const NavItem = styled.li``;

export const Nav = () => {
  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <Link to="/calender">
            <Calender />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/rank">
            <Rranking />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/">
            <Home />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/graph">
            <Graph />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/mypage">
            <Mypage />
          </Link>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
};
