import React from "react";
import { Link } from "react-router-dom";
import GitFarmLogoImg from "@/assets/icon/login/GitFarmLogo.svg";
import MarkGitHub from "@/assets/icon/login/mark-github.svg";
import * as api from "@/api";
import * as GitFarm from "./style";

function Login() {
  api.getBreeds();
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
