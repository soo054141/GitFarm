import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GitFarmLogoImg from "@/assets/icon/login/GitFarmLogo.svg";
import * as Load from "./style";

function Loading() {
  const navigate = useNavigate();

  const getData = async () => {
    try {
      await axios.get("http://localhost:8888/api/users/loading", {
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
      <Load.Message>Repository 정보를 불러오고 있습니다.</Load.Message>
      <Load.Message>잠시만 기다려주세요.</Load.Message>
    </Load.Wrapper>
  );
}

export default Loading;
