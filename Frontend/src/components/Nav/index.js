import React from "react";
import { useLocation, Link } from "react-router-dom";
import Calender from "@/assets/icon/nav/calender_nav.svg";
import Rranking from "@/assets/icon/nav/ranking_nav.svg";
import Graph from "@/assets/icon/nav/graph_nav.svg";
import Mypage from "@/assets/icon/nav/mypage_nav.svg";
import * as Navs from "./style";

function Nav() {
  const location = useLocation();

  return location.pathname !== "/" && location.pathname !== "/loading" ? (
    <Navs.Container>
      <Navs.List>
        <Navs.Item>
          <Link to="/calender">
            <Navs.String>월별 커밋 기록</Navs.String>
            <Calender width="22px" height="100%" />
          </Link>
        </Navs.Item>
        <Navs.Item>
          <Link to="/rank">
            <Navs.String>랭크</Navs.String>
            <Rranking />
          </Link>
        </Navs.Item>
        <Navs.Item>
          <Link to="/main">
            <Navs.String>홈</Navs.String>
            <Navs.Home />
          </Link>
        </Navs.Item>
        <Navs.Item>
          <Link to="/graph">
            <Navs.String>연간 커밋 그래프</Navs.String>
            <Graph />
          </Link>
        </Navs.Item>
        <Navs.Item>
          <Link to="/mypage">
            <Navs.String>마이 페이지</Navs.String>
            <Mypage />
          </Link>
        </Navs.Item>
      </Navs.List>
    </Navs.Container>
  ) : null;
}

export default Nav;
