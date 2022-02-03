import React from "react";
import styled from "styled-components";
import Refresh from "../../assets/icon/header/refresh.svg";
import Seeds from "../../assets/icon/header/seeds.svg";
import { Link } from "react-router-dom";
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  padding-top: 20px;
`;

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
