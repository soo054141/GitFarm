import React from "react";
import * as Controller from "./style";
import DefaultFarm from "../../../assets/icon/framePicture/defaultFarm.svg";
import TwentyPctFarm from "../../../assets/icon/framePicture/twentyPctFarm.svg";
import FortyPctFarm from "../../../assets/icon/framePicture/fortyPctFarm.svg";
import SixtyPctFarm from "../../../assets/icon/framePicture/sixtyPctFarm.svg";
import EightyPctFarm from "../../../assets/icon/framePicture/eightyPctFarm.svg";
import HundredPctFarm from "../../../assets/icon/framePicture/hundredPctFarm.svg";

export function FramePicture({ ratio }) {
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
  return <Controller.Container>{result}</Controller.Container>;
}
