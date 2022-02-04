import React from "react";
import * as FarmPictures from "./style";
import DefaultFarm from "../../../assets/icon/farmPicture/defaultFarm.svg";
import TwentyPctFarm from "../../../assets/icon/farmPicture/twentyPctFarm.svg";
import FortyPctFarm from "../../../assets/icon/farmPicture/fortyPctFarm.svg";
import SixtyPctFarm from "../../../assets/icon/farmPicture/sixtyPctFarm.svg";
import EightyPctFarm from "../../../assets/icon/farmPicture/eightyPctFarm.svg";
import HundredPctFarm from "../../../assets/icon/farmPicture/hundredPctFarm.svg";

export function FarmPicture({ ratio }) {
  const result =
    ratio < 20 ? (
      <DefaultFarm />
    ) : ratio < 40 ? (
      <TwentyPctFarm />
    ) : ratio < 60 ? (
      <FortyPctFarm />
    ) : ratio < 80 ? (
      <SixtyPctFarm />
    ) : ratio < 100 ? (
      <EightyPctFarm />
    ) : (
      <HundredPctFarm />
    );
  return <FarmPictures.Container>{result}</FarmPictures.Container>;
}
