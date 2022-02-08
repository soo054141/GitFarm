import React from "react";
import { useLocation } from "react-router-dom";
import Calender from "../../assets/icon/nav/calender_nav.svg";
import Rranking from "../../assets/icon/nav/ranking_nav.svg";
import Graph from "../../assets/icon/nav/graph_nav.svg";
import Mypage from "../../assets/icon/nav/mypage_nav.svg";
import { Link } from "react-router-dom";
import * as Navs from "./style";

export function Nav() {
  const location = useLocation();

  return location.pathname !== "/" ? (
    <Navs.Container>
      <Navs.List>
        <Navs.Item>
          <Link to="/calender">
            <Calender width="22px" height="100%" />
          </Link>
        </Navs.Item>
        <Navs.Item>
          <Link to="/rank">
            <Rranking />
          </Link>
        </Navs.Item>
        <Navs.Item>
          <Link to="/main">
            <Navs.Home />
          </Link>
        </Navs.Item>
        <Navs.Item>
          <Link to="/graph">
            <Graph />
          </Link>
        </Navs.Item>
        <Navs.Item>
          <Link to="/mypage">
            <Mypage />
          </Link>
        </Navs.Item>
      </Navs.List>
    </Navs.Container>
  ) : null;
}
