import React from "react";
import * as FarmPictures from "./style";

function FarmPicture({ ratio }) {
  function Render() {
    return (
      <FarmPictures.Container>
        <FarmPictures.Default />
        {ratio >= 20 && <FarmPictures.Plat1 />}
        {ratio >= 40 && <FarmPictures.Plat2 />}
        {ratio >= 60 && (
          <>
            <FarmPictures.House />
            <FarmPictures.Tree1 />
            <FarmPictures.Tree2 />
          </>
        )}
        {ratio >= 80 && (
          <>
            <FarmPictures.Tree3 />
            <FarmPictures.Tree4 />
          </>
        )}
        {ratio >= 100 && (
          <>
            <FarmPictures.Petal />
            <FarmPictures.Goose />
            <FarmPictures.Dog />
            <FarmPictures.Chicken />
            <FarmPictures.Chick1 />
            <FarmPictures.Chick2 />
            <FarmPictures.Chick3 />
            <FarmPictures.Rabbit1 />
            <FarmPictures.Rabbit2 />
          </>
        )}
      </FarmPictures.Container>
    );
  }

  return Render();
}
export default FarmPicture;
