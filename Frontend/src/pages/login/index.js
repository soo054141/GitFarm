import React from "react";
import { Link } from "react-router-dom";
import * as GitFarm from "./style";
import GitFarmLogoImg from "@/assets/icon/login/GitFarmLogo.svg";
import MarkGitHub from "@/assets/icon/login/mark-github.svg";

export function Login() {
  return (
    <GitFarm.Container>
      <GitFarm.Title>Git Farm</GitFarm.Title>
      <GitFarm.Logo>
        <GitFarmLogoImg />
      </GitFarm.Logo>
      <Link to="/main">
        <GitFarm.LoginBtn>
          <MarkGitHub />
          GitHub 계정으로 시작
        </GitFarm.LoginBtn>
      </Link>
    </GitFarm.Container>
  );
}
