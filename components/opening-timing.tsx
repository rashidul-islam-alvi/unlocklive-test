import React from "react";
import GlobalContainer from "./ui/global-wrapper";
import SubHeader from "./ui/subheader";
import ImageComponent from "./ui/custom-image-component";

const data = [
  {
    id: 1,
    headerLabel: "Our Opening Hours",
    firstLabel: "848 A 28TH ST, Brooklyn",
    secondLabel: "New York, UK",
  },
  {
    id: 2,
    headerLabel: "Our Live Location",
    firstLabel: "Mon - Sat: 07:00 - 18:00",
    secondLabel: "Only Sun: 09:00 - 14:00",
  },
  {
    id: 3,
    headerLabel: "Book A Table Now",
    firstLabel: "+1 318-254-6849",
    secondLabel: "+1 452-754-6579",
  },
];

const OpeningTiming = () => {
  const openingCards = data.map((detail) => (
    <div key={detail.id} className="flex text-center flex-col gap-6">
      <SubHeader label={detail.headerLabel} className="text-[24px] font-bold" />
      <div className="flex gap-2 flex-col">
        <p className="text-[16px]">{detail.firstLabel}</p>
        <p>{detail.secondLabel}</p>
      </div>
    </div>
  ));

  return (
    <div className="lg:py-[66px] pb-10 bg-[#FFFAF2] relative ">
      <GlobalContainer>
        <div>
          <div className="w-full lg:w-[320px]  px-[25px] py-[30px] h-[326px] bg-coffee lg:absolute top-0 z-10 rounded-b-[12px] flex flex-col justify-between">
            <ImageComponent
              path="/Arrow.png"
              alt="button_play"
              className="w-[242px] h-[166px]"
            />
            <div className="flex items-center justify-between">
              <ImageComponent
                path="/play.png"
                alt="button_play"
                className="w-[60px] h-[60px]"
              />
              <p className="text-[24px] text-white">Play Intro Video</p>
            </div>
          </div>
          <div className="flex flex-col mt-10 lg:mt-0 lg:flex-row gap-10 lg:gap-[76px] justify-end">
            {openingCards}
          </div>
        </div>
      </GlobalContainer>
    </div>
  );
};

export default OpeningTiming;
