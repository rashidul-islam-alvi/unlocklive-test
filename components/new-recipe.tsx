import React from "react";
import GlobalContainer from "./ui/global-wrapper";
import HeaderWithLine from "./ui/header-with-line";
import Header from "./ui/header";
import SubHeader from "./ui/subheader";
import ImageComponent from "./ui/custom-image-component";

const NewRecipie = () => {
  return (
    <div className="overflow-clip lg:h-[600px] bg-[#FFFAF2]">
      <GlobalContainer>
        <div className="flex py-10 lg:py-[75px] gap-[32px] flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="flex gap-10 flex-col">
              <div className="flex gap-[14px] flex-col w-[90%]">
                <HeaderWithLine label="New Recipes" lineOne />
                <Header label="Taste Our New Recipe" />
                <SubHeader
                  label="Malesuada cursus a tincidunt volutpat posuere lacinia. Congue malesuada lacus pharetra ut vel amet. Amet turpis suspendisse porttitor scelerisque amet dolor et. Nisi ac vitae tortor lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing eu sit ornare imperdiet viverra sit vel. "
                  className="text-[#270A05]"
                />
                <SubHeader
                  label="There are many variations of passages of Lorem Ipsum form any injected humour, or randomised words which don't look 
              slightly believable."
                  className="text-[#270A05]"
                />
              </div>

              <div className="flex gap-8 justify-center lg:justify-start">
                <div className="border-2 border-coffee rounded-full">
                  <ImageComponent
                    alt="left_arrow_slider_icon"
                    path="/left_arrow.svg"
                  />
                </div>
                <div className="border-2 border-coffee rounded-full rotate-180">
                  <ImageComponent
                    alt="left_arrow_slider_icon"
                    path="/left_arrow.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:relative w-full lg:w-1/2 ">
            <div className="flex flex-col lg:flex-row lg:absolute gap-[32px]">
              <ImageComponent
                path="/Images.png"
                alt="recipe_one"
                className="w-[375px] h-[471px] rounded-[28px] lg:overflow-hidden"
              />
              <ImageComponent
                path="/Images.png"
                alt="recipe_one"
                className="w-[375px] h-[471px] rounded-[28px] lg:overflow-hidden hidden lg:block"
              />
              <ImageComponent
                path="/Images.png"
                alt="recipe_one"
                className="w-[375px] h-[471px] rounded-[28px] lg:overflow-hidden hidden lg:block"
              />
            </div>
          </div>
        </div>
      </GlobalContainer>
    </div>
  );
};

export default NewRecipie;
