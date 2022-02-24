import React from "react";
import ContentLoader from "react-content-loader";
import * as Skeletons from "./style";

function Skeleton() {
  return (
    <Skeletons.Container>
      <ContentLoader
        speed={0.5}
        width={200}
        height={60}
        backgroundColor="#e3e3e3"
        foregroundColor="#d6d6d6"
      >
        <rect x="95" y="20" rx="3" ry="3" width="88" height="8" />
        <rect x="95" y="36" rx="3" ry="3" width="52" height="6" />
        <circle cx="54" cy="30" r="20" />
      </ContentLoader>
    </Skeletons.Container>
  );
}

export default Skeleton;
