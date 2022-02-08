import React from "react";
import Refresh from "../../assets/icon/header/refresh.svg";
import Seeds from "../../assets/icon/header/seeds.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderWrapper } from "./style";
import BackButton from "../../assets/icon/header/back-button.svg";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  return location.pathname === "/setting" || location.pathname === "/goal" ? (
    <HeaderWrapper>
      <BackButton onClick={() => navigate(-1)} />
    </HeaderWrapper>
  ) : (
    <HeaderWrapper>
      <Refresh />
      <Link to="/badge">
        <Seeds />
      </Link>
    </HeaderWrapper>
  );
}
