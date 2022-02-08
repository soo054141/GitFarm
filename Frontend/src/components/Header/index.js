import React from "react";
import Refresh from "../../assets/icon/header/refresh.svg";
import Seeds from "../../assets/icon/header/seeds.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderWrapper } from "./style";
import BackButton from "../../assets/icon/header/back-button.svg";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/setting" || location.pathname === "/goal") {
    return (
      <HeaderWrapper>
        <BackButton onClick={() => navigate(-1)} />
      </HeaderWrapper>
    );
  } else if (location.pathname === "/") {
    return null;
  } else {
    return (
      <HeaderWrapper>
        <Refresh />
        <Link to="/badge">
          <Seeds />
        </Link>
      </HeaderWrapper>
    );
  }
}
