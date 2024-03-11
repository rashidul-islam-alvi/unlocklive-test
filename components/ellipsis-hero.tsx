import React from "react";
import ImageComponent from "./ui/custom-image-component";

const EllipsisHero = () => {
  return (
    <div className="flex">
      <ImageComponent
        path="/Ellipse 1549.png"
        alt="image"
        className="w-[54px] h-[54px]"
      />
      <ImageComponent
        path="/Ellipse 1550.png"
        alt="image"
        className="w-[54px] h-[54px] right-5"
      />
      <ImageComponent
        path="/Ellipse 1551.png"
        alt="image"
        className="w-[54px] h-[54px] right-10"
      />
    </div>
  );
};

export default EllipsisHero;
