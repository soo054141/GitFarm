import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GitFarmLogoImg from "@/assets/icon/login/GitFarmLogo.svg";
import * as Load from "./style";

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const isloading = () =>
      setTimeout(() => {
        navigate("/main");
      }, 5000);
    isloading();
    return () => clearTimeout(isloading);
  }, []);
  return (
    <Load.Wrapper>
      <Load.Title>
        Loading&nbsp;
        <Load.LoadingDots />
      </Load.Title>
      <Load.Logo>
        <GitFarmLogoImg />
      </Load.Logo>
      <Load.Message>Repository 정보를 불러오고 있습니다.</Load.Message>
      <Load.Message>잠시만 기다려주세요.</Load.Message>
    </Load.Wrapper>
  );
}

export default Loading;
