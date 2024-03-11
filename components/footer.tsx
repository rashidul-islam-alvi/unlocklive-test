import React from "react";
import GlobalContainer from "./ui/global-wrapper";
import ImageComponent from "./ui/custom-image-component";

const Footer = () => {
  return (
    <div className="py-[31px] bg-[#270A05]">
      <GlobalContainer>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center">
          <div>
            <ImageComponent
              alt="footer_logo"
              path="Logo.svg"
              className="w-[210px] h-12"
            />
          </div>

          <ul className="flex gap-[45px] justify-center">
            <li className="text-white text-lg">Terms</li>
            <li className="text-white text-lg">Privacy</li>
            <li className="text-white text-lg">Cookies</li>
          </ul>

          <div className="flex gap-[15px]">
            <div className="border-2 border-white rounded-full w-10 h-10 flex justify-center items-center">
              <ImageComponent
                alt="left_arrow_slider_icon"
                path="/icon1.svg"
                className="w-3 h-3"
              />
            </div>
            <div className="border-2 border-white rounded-full w-10 h-10 flex justify-center items-center">
              <ImageComponent
                alt="left_arrow_slider_icon"
                path="/icon2.svg"
                className="w-3 h-3"
              />
            </div>
            <div className="border-2 border-white rounded-full w-10 h-10 flex justify-center items-center">
              <ImageComponent
                alt="left_arrow_slider_icon"
                path="/icon3.svg"
                className="w-3 h-3"
              />
            </div>
          </div>
        </div>
      </GlobalContainer>
    </div>
  );
};

export default Footer;
