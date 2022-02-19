import React from "react";
import GitFarmLogoImg from "@/assets/icon/login/GitFarmLogo.svg";
import MarkGitHub from "@/assets/icon/login/mark-github.svg";
import * as GitFarm from "./style";
import { LOGIN_URL } from "../../utils/api";

function Login() {
  return (
    <GitFarm.Container>
      <GitFarm.Title>Git Farm</GitFarm.Title>
      <GitFarm.Logo>
        <GitFarmLogoImg />
      </GitFarm.Logo>
      <a href="http://localhost:8888/api/auth/github">
        <GitFarm.LoginBtn>
          <MarkGitHub />
          GitHub 계정으로 시작
        </GitFarm.LoginBtn>
      </a>
    </GitFarm.Container>
  );
}

export default Login;
