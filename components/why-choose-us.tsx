import React from "react";
import ImageComponent from "./ui/custom-image-component";
import GlobalContainer from "./ui/global-wrapper";
import HeaderWithLine from "./ui/header-with-line";
import Header from "./ui/header";
import SubHeader from "./ui/subheader";
import OutlinedButton from "./ui/outlined-button";

const stats = [
  {
    id: 1,
    number: "20+",
    typeLabel: "Years Experience",
    decorationBorder: false,
  },
  { id: 2, number: "100+", typeLabel: "Master Chef", decorationBorder: true },
  { id: 3, number: "30+", typeLabel: "Achivements", decorationBorder: false },
];

const WhyChooseUs = () => {
  const statsCards = stats.map((stat) => (
    <div
      key={stat.id}
      className="px-2 py-7 flex flex-col text-center border-[1px] rounded-xl relative gap-8"
    >
      {stat.decorationBorder && (
        <div className="w-full h-full border-2 absolute top-0 left-0 rounded-[10px] rotate-[3.69deg]" />
      )}
      <Header
        label={stat.number}
        className="text-black text-2xl lg:text-[60px]"
      />
      <SubHeader
        label={stat.typeLabel}
        className="font-semibold lg:text-[20px] text-[14px] text-coffee"
      />
    </div>
  ));

  return (
    <div className="mt-10 lg:mt-20 relative">
      <div className="absolute right-0">
        <ImageComponent
          path="/cup.png"
          alt="cup_decoration_bg"
          className="w-[230px] h-[127px]"
        />
      </div>
      <GlobalContainer>
        <div className="flex flex-col lg:flex-row  lg:py-[75px] gap-10 lg:gap-0 ">
          <div className="lg:w-1/2">
            <div className="flex flex-col  gap-[30px]">
              <div className="flex gap-[14px] flex-col">
                <HeaderWithLine label="Why Choose Us ?" lineOne />
                <Header label="Choosing Epicurean, A Taste of Perfection" />
                <SubHeader
                  label="Epicurean takes pride in the art of roasting, transforming raw coffee beans into a symphony of aromatic notes and rich flavors."
                  className="text-[#270A05]"
                />
              </div>

              <div className="grid grid-cols-3 gap-[30px]">{statsCards}</div>

              <div>
                <SubHeader label="Your choice to savor our coffee is an invitation to experience the epitome of craftsmanship, flavor, and dedication." />
              </div>

              <div className="flex justify-center lg:block">
                <OutlinedButton buttonLabel="Explore Our Menus" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center  relative">
            <div className="lg:w-[500px] w-[410px] h-[500px] absolute border-2 bottom-0 rounded-t-[500px] rounded-b-[30px]" />
            <ImageComponent
              path="/Layer 1 5.png"
              alt="Coffee"
              className="w-[450px] h-[530px]"
            />
          </div>
        </div>
      </GlobalContainer>
    </div>
  );
};

export default WhyChooseUs;
