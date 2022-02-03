import React from "react";
import Calender from "../../assets/icon/nav/calender_nav.svg";
import Rranking from "../../assets/icon/nav/ranking_nav.svg";
import Graph from "../../assets/icon/nav/graph_nav.svg";
import Mypage from "../../assets/icon/nav/mypage_nav.svg";
import { Link } from "react-router-dom";
import { NavWrapper, Home, NavList, NavItem } from "./style";

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
