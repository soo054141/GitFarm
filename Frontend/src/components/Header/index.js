import React from "react";
import Refresh from "../../assets/icon/header/refresh.svg";
import Seeds from "../../assets/icon/header/seeds.svg";
import { Link } from "react-router-dom";
import { HeaderWrapper } from "./style";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Refresh />
      <Link to="/badge">
        <Seeds />
      </Link>
    </HeaderWrapper>
  );
};
