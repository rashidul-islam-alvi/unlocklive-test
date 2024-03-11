import React from "react";
import GlobalContainer from "./ui/global-wrapper";
import Header from "./ui/header";
import SubHeader from "./ui/subheader";
import { Lemon } from "next/font/google";
import ImageComponent from "./ui/custom-image-component";
import PrimaryButton from "./ui/primary-button";
import EllipsisHero from "./ellipsis-hero";

const lemon = Lemon({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  return (
    <div className="py-[40px] lg:pt[86px] lg:pb-[160px]  bg-hero-background-decoration bg-no-repeat bg-cover bg-center">
      <GlobalContainer className="flex ">
        <div className="flex justify-center items-center">
          <div>
            <div className="flex flex-col gap-3">
              <SubHeader
                label="WELCOME TO OUR"
                className={`"text-[16px] ${lemon.className} `}
              />
              <Header label="Epicurean" className="lg:text-[124px]" />
              <Header label="Elevating Your Coffee Experience" />
              <SubHeader label="Epicurean embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary." />
            </div>
            <div className="mt-[50px] flex flex-col-reverse lg:flex-row gap-11 lg:items-center">
              <PrimaryButton buttonLabel="Explore Our Menu" />

              <div className="flex  items-center justify-between lg:justify-start">
                <EllipsisHero />
                <div className="flex flex-col items-center lg:block lg:items-start">
                  <p className="text-[24px] text-coffee font-bold">1200+</p>
                  <p className="text-coffee font-semibold">
                    Tasty Variant Coffee
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-[10px] mt-16">
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <div className="w-3 h-3 rounded-full bg-slate-300" />
              <div className="w-3 h-3 rounded-full bg-coffee" />
              <div className="w-3 h-3 rounded-full bg-slate-300" />
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div>
            <ImageComponent
              path="/Layer 1 1.png"
              alt="hero_coffee_image"
              className="w-[754px] h-[630px]"
            />
          </div>
        </div>
      </GlobalContainer>
    </div>
  );
};

export default Hero;
