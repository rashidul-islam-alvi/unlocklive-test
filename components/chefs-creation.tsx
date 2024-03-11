import React from "react";
import GlobalContainer from "./ui/global-wrapper";
import HeaderWithLine from "./ui/header-with-line";
import Header from "./ui/header";
import SubHeader from "./ui/subheader";
import ImageComponent from "./ui/custom-image-component";

const categoryMenuLinkList = [
  "All",
  "Burger",
  "Drinks",
  "Pizza",
  "Dinner",
  "Lunch",
  "Cookies",
  "Bakery",
];

const ChefsCreation = () => {
  const categories = categoryMenuLinkList.map((link) => (
    <li
      key={link}
      className="px-5 py-3  lg:rounded-[50px] rounded-lg hover:border-[1px] cursor-pointer border-[1px]  border-coffee lg:border-transparent hover:border-coffee"
    >
      {link}
    </li>
  ));

  return (
    <div>
      <GlobalContainer>
        <div className="py-[75px] flex flex-col gap-10">
          <div className="flex flex-col gap-[14px]  items-center ">
            <HeaderWithLine label="Showcase" />
            <Header
              label="Our Chefs New Creations"
              className="text-center lg:text-start"
            />
            <SubHeader
              className="text-[18px] lg:w-1/2 text-center"
              label="Behold the extraordinary creations born from the synergy of our users' ingenuity and the transformative power of AI, a testament to boundless innovation."
            />
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex justify-center items-center">
              <ul className="grid grid-cols-3 lg:flex gap-6">{categories}</ul>
            </div>

            <div className="parent">
              <div className="div1">
                <ImageComponent
                  path="/cat.png"
                  alt="cat"
                  className="w-full h-full rounded-[24px] overflow-hidden"
                />
              </div>
              <div className="div2">
                <ImageComponent
                  path="/2.png"
                  alt="coffee_2"
                  className="w-full h-full rounded-[24px] overflow-hidden"
                />
              </div>
              <div className="div3">
                <ImageComponent
                  path="/3.png"
                  alt="coffee_2"
                  className="w-full h-full rounded-[24px] overflow-hidden"
                />
              </div>
              <div className="div4">
                <ImageComponent
                  path="/4.png"
                  alt="coffee_2"
                  className="w-full h-full rounded-[24px] overflow-hidden"
                />
              </div>
              <div className="div5">
                <ImageComponent
                  path="/5.png"
                  alt="coffee_2"
                  className="w-full h-full rounded-[24px] overflow-hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </GlobalContainer>
    </div>
  );
};

export default ChefsCreation;
