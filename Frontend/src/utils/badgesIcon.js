import React from "react";
import Days7 from "@/assets/icon/badge/7days.svg";
import Days14 from "@/assets/icon/badge/14days.svg";
import Days21 from "@/assets/icon/badge/21days.svg";
import Days28 from "@/assets/icon/badge/28days.svg";

import Achievement500 from "@/assets/icon/badge/500achievement.svg";
import Achievement1000 from "@/assets/icon/badge/1000achievement.svg";
import Achievement5000 from "@/assets/icon/badge/5000achievement.svg";

import FarmStage1 from "@/assets/icon/badge/farm-stage1.svg";
import FarmStage2 from "@/assets/icon/badge/farm-stage2.svg";
import FarmStage3 from "@/assets/icon/badge/farm-stage3.svg";

import Level1 from "@/assets/icon/level/level1.svg";
import Level2 from "@/assets/icon/level/level2.svg";
import Level3 from "@/assets/icon/level/level3.svg";
import Level4 from "@/assets/icon/level/level4.svg";
import Level5 from "@/assets/icon/level/level5.svg";

import Ranking1 from "@/assets/icon/badge/ranking1.svg";
import Ranking2 from "@/assets/icon/badge/ranking2.svg";
import Ranking3 from "@/assets/icon/badge/ranking3.svg";

export const days7 = <Days7 />;
export const days14 = <Days14 />;
export const days21 = <Days21 />;
export const days28 = <Days28 />;

export const achievement500 = <Achievement500 />;
export const achievement1000 = <Achievement1000 />;
export const achievement5000 = <Achievement5000 />;

export const farmStage1 = <FarmStage1 />;
export const farmStage2 = <FarmStage2 />;
export const farmStage3 = <FarmStage3 />;

export const level1 = <Level1 />;
export const level2 = <Level2 />;
export const level3 = <Level3 />;
export const level4 = <Level4 />;
export const level5 = <Level5 />;

export const ranking1 = <Ranking1 />;
export const ranking2 = <Ranking2 />;
export const ranking3 = <Ranking3 />;

export const badgesType = [
  {
    id: 0,
    title: "커밋 500개 달성",
    icon: achievement500,
    userHaveBadge: false,
  },
  {
    id: 1,
    title: "커밋 1000개 달성",
    icon: achievement1000,
    userHaveBadge: false,
  },
  {
    id: 2,
    title: "커밋 5000개 달성",
    icon: achievement5000,
    userHaveBadge: false,
  },

  { id: 3, title: "랭킹 1위", icon: ranking1, userHaveBadge: false },
  { id: 4, title: "랭킹 2위", icon: ranking2, userHaveBadge: false },
  { id: 5, title: "랭킹 3위", icon: ranking3, userHaveBadge: false },

  {
    id: 6,
    title: "7일 연속 커밋 달성",
    icon: days7,
    userHaveBadge: false,
  },
  {
    id: 7,
    title: "2주 연속 커밋 달성",
    icon: days14,
    userHaveBadge: false,
  },
  {
    id: 8,
    title: "3주 연속 커밋 달성",
    icon: days21,
    userHaveBadge: false,
  },
  {
    id: 9,
    title: "4주 연속 커밋 달성",
    icon: days28,
    userHaveBadge: false,
  },

  { id: 10, title: "씨앗 레벨", icon: level1, userHaveBadge: false },
  { id: 11, title: "초보 농부", icon: level2, userHaveBadge: false },
  { id: 12, title: "중수 농부", icon: level3, userHaveBadge: false },
  { id: 13, title: "고수 농부", icon: level4, userHaveBadge: false },
  { id: 14, title: "팜 마스터", icon: level5, userHaveBadge: false },
];
