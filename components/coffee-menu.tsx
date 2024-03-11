import React from "react";
import GlobalContainer from "./ui/global-wrapper";
import HeaderWithLine from "./ui/header-with-line";
import Header from "./ui/header";
import ImageComponent from "./ui/custom-image-component";
import SubHeader from "./ui/subheader";
import OutlinedButton from "./ui/outlined-button";

const CoffeMenus = [
  {
    id: 1,
    menuName: "Double Espresso x2",
    menuDesc: "There are many variations of passages Lorem Ipsum form",
    menuImage: "/menu.png",
    menuImageAlt: "first_menu",
    menuPrice: "$10",
    isBgCoffee: true,
  },
  {
    id: 2,
    menuName: "Hazelnut Heaven Latte",
    menuDesc: "There are many variations of passages Lorem Ipsum form",
    menuImage: "/menu2.png",
    menuImageAlt: "",
    menuPrice: "$10",
    isBgCoffee: true,
  },
  {
    id: 3,
    menuName: "Salted Caramel Cold Brew",
    menuDesc: "There are many variations of passages Lorem Ipsum form",
    menuImage: "/menu3.png",
    menuImageAlt: "",
    menuPrice: "$10",
    isBgCoffee: true,
  },
  {
    id: 4,
    menuName: "Double Espresso x2",
    menuDesc: "There are many variations of passages Lorem Ipsum form",
    menuImage: "/menu.png",
    menuImageAlt: "",
    menuPrice: "$10",
    isBgCoffee: true,
  },
];

const CoffeeMenu = () => {
  const coffeMenus = CoffeMenus.map((menu) => (
    <div key={menu.id} className="border-[1px] py-[30px] px-[35px] rounded-xl">
      <div className="flex gap-4 flex-col lg:flex-row items-center lg:items-start">
        <div className="w-[84px] h-[84px] bg-slate-100 border-dashed border-2 border-coffee rounded-full py-[7px] px-[7px]">
          <ImageComponent
            path={menu.menuImage}
            alt={menu.menuImageAlt}
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center flex-col lg:block lg:items-start">
          <Header label={menu.menuName} className="text-[24px] font-semibold" />
          <SubHeader
            label={menu.menuDesc}
            className="text-center lg:text-start"
          />
        </div>

        <div>
          <div className="w-[60px] h-[60px] p-[1px]  border-[#270A05] border-dashed rounded-full border-[1px]">
            <div
              className={`w-full h-full flex justify-center items-center ${
                menu.isBgCoffee ? "bg-coffee" : "bg-slate-100"
              } rounded-full`}
            >
              <p className="text-[20px] text-white font-medium">
                {menu.menuPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="py-20 relative">
      <div className="absolute bottom-0 right-0 ">
        <ImageComponent
          path="/nuts.png"
          alt="nuts_decoration"
          className="w-[241px] h-[160px]"
        />
      </div>

      <GlobalContainer className="flex flex-col gap-20 justify-center items-center">
        <div className="flex flex-col gap-[14px] items-center ">
          <HeaderWithLine label="Coffee Menu" lineOne lineTwo />
          <Header
            label="Epicureans Coffee Menu"
            className="text-center lg:text-start"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {coffeMenus}
        </div>

        <div>
          <OutlinedButton buttonLabel="View All Menu" />
        </div>
      </GlobalContainer>
    </div>
  );
};

export default CoffeeMenu;

{
  /* <div className="border-[1px] py-[30px] px-[35px] rounded-xl">
            <div className="flex gap-4 flex-col lg:flex-row items-center lg:items-start">
              <div className="w-[84px] h-[84px] bg-slate-100 border-dashed border-2 border-coffee rounded-full py-[7px] px-[7px]">
                <ImageComponent
                  path="/menu.png"
                  alt="menu_one"
                  className="w-full h-full"
                />
              </div>
              <div className="flex items-center flex-col lg:block lg:items-start">
                <Header
                  label="Double Espresso x2"
                  className="text-[24px] font-semibold"
                />
                <SubHeader
                  label="There are many variations of passages Lorem Ipsum form"
                  className="text-center lg:text-start"
                />
              </div>

              <div>
                <div className="w-[60px] h-[60px] p-[1px]  border-[#270A05] border-dashed rounded-full border-[1px]">
                  <div className="w-full h-full flex justify-center items-center bg-coffee rounded-full">
                    <p className="text-[20px] text-white font-medium">$10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] py-[30px] px-[35px] rounded-xl">
            <div className="flex gap-4">
              <div className="w-[84px] h-[84px] bg-slate-100 border-dashed border-2 border-coffee rounded-full py-[7px] px-[7px]">
                <ImageComponent
                  path="/menu2.png"
                  alt="menu_two"
                  className="w-full h-full"
                />
              </div>
              <div>
                <Header
                  label="Hazelnut Heaven Latte"
                  className="text-[24px] font-semibold"
                />
                <SubHeader label="There are many variations of passages Lorem Ipsum form" />
              </div>

              <div>
                <div className="w-[60px] h-[60px] p-[1px]  border-[#270A05] border-dashed rounded-full border-[1px]">
                  <div className="w-full h-full flex justify-center items-center bg-slate-100 rounded-full">
                    <p className="text-[20px] text-[#270A05] font-medium">
                      $10
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] py-[30px] px-[35px] rounded-xl">
            <div className="flex gap-4">
              <div className="w-[84px] h-[84px] bg-slate-100 border-dashed border-2 border-coffee rounded-full py-[7px] px-[7px]">
                <ImageComponent
                  path="/menu3.png"
                  alt="menu_three"
                  className="w-full h-full"
                />
              </div>
              <div>
                <Header
                  label="Salted Caramel Cold Brew"
                  className="text-[24px] font-semibold"
                />
                <SubHeader label="There are many variations of passages Lorem Ipsum form" />
              </div>

              <div>
                <div className="w-[60px] h-[60px] p-[1px]  border-[#270A05] border-dashed rounded-full border-[1px]">
                  <div className="w-full h-full flex justify-center items-center bg-slate-100 rounded-full">
                    <p className="text-[20px] text-dark-coffee font-medium">
                      $10
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] py-[30px] px-[35px] rounded-xl">
            <div className="flex gap-4">
              <div className="w-[84px] h-[84px] bg-slate-100 border-dashed border-2 border-coffee rounded-full py-[7px] px-[7px]">
                <ImageComponent
                  path="/menu.png"
                  alt="menu_one"
                  className="w-full h-full"
                />
              </div>
              <div>
                <Header
                  label="Double Espresso x2"
                  className="text-[24px] font-semibold"
                />
                <SubHeader label="There are many variations of passages Lorem Ipsum form" />
              </div>

              <div>
                <div className="w-[60px] h-[60px] p-[1px]  border-[#270A05] border-dashed rounded-full border-[1px]">
                  <div className="w-full h-full flex justify-center items-center bg-slate-100 rounded-full">
                    <p className="text-[20px] text-dark-coffee font-medium">
                      $10
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */
}
