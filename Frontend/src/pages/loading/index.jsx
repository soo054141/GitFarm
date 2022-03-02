import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GitFarmLogoImg from "@/assets/icon/login/GitFarmLogo.svg";
import Refresh from "@/assets/icon/header/refresh.svg";
import * as Load from "./style";

function Loading() {
  const navigate = useNavigate();

  const getData = async () => {
    try {
      await axios.get("/api/users/loading", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err.message);
    } finally {
      navigate("/main");
    }
  };

  useEffect(() => {
    getData();
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
      <Load.MessageBox>
        <Refresh /> 버튼을 누르면 <br />
        커밋 데이터가 업데이트 됩니다.
        <br />
        업데이트는 1시간마다 가능하며 약 15초 소요됩니다.
        <br />
      </Load.MessageBox>
      <Load.ProgressBar>
        <Load.Progress />
      </Load.ProgressBar>
      <Load.Message>Repository 정보를 불러오고 있습니다.</Load.Message>
      <Load.Message>잠시만 기다려주세요.</Load.Message>
    </Load.Wrapper>
  );
}

export default Loading;
