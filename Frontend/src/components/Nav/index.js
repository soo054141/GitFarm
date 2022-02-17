import React from "react";
import { useLocation, Link } from "react-router-dom";
import Calender from "@/assets/icon/nav/calender_nav.svg";
import Rranking from "@/assets/icon/nav/ranking_nav.svg";
import Graph from "@/assets/icon/nav/graph_nav.svg";
import Mypage from "@/assets/icon/nav/mypage_nav.svg";
import * as Navs from "./style";

function Nav() {
  const location = useLocation();

  return location.pathname !== "/" ? (
    <>
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

      <Navs.ResponsiveHeader>
        <Navs.ResponsiveContainer>
          <Navs.ResponsiveLogo>
            <Link to="/main">
              <Navs.ResponsiveWrapper>
                <Navs.GitFarmLogo />
                <Navs.LogoTitle>Git Farm</Navs.LogoTitle>
              </Navs.ResponsiveWrapper>
            </Link>
          </Navs.ResponsiveLogo>
          <Navs.ResponsiveNav>
            <Navs.List>
              <Navs.Item>
                <Link to="/main">
                  <Navs.String>오늘의 커밋</Navs.String>
                </Link>
              </Navs.Item>
              <Navs.Item>
                <Link to="/calender">
                  <Navs.String>월별 커밋 기록</Navs.String>
                </Link>
              </Navs.Item>
              <Navs.Item>
                <Link to="/rank">
                  <Navs.String>랭링</Navs.String>
                </Link>
              </Navs.Item>
              <Navs.Item>
                <Link to="/graph">
                  <Navs.String>월간/연간 커밋 그래프</Navs.String>
                </Link>
              </Navs.Item>
              <Navs.Item>
                <Link to="/badge">
                  <Navs.String>배지</Navs.String>
                </Link>
              </Navs.Item>
              <Navs.Item>
                <Link to="/mypage">
                  <Navs.String>마이페이지</Navs.String>
                </Link>
              </Navs.Item>
            </Navs.List>
          </Navs.ResponsiveNav>
        </Navs.ResponsiveContainer>
      </Navs.ResponsiveHeader>
    </>
  ) : null;
}

export default Nav;
