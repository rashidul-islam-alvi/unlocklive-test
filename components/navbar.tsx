import React from "react";
import ImageComponent from "./ui/custom-image-component";
import GlobalContainer from "./ui/global-wrapper";

const Navmenulist = [
  { id: 1, label: "Home", hasChild: false, href: "/home" },
  { id: 2, label: "Pages", hasChild: true, href: "/pages" },
  { id: 3, label: "Menu", hasChild: true, href: "/menu" },
  { id: 4, label: "Contact Us", hasChild: false, href: "/contact" },
];

const Navbar = () => {
  const menus = Navmenulist.map((menu) => (
    <li key={menu.id} className="flex gap-3 items-center">
      {menu.label}
      {menu.hasChild && (
        <ImageComponent
          path="/down-chevron.svg"
          alt="Down Chevron Icon"
          className="w-[12px]  h-[12px]"
        />
      )}
    </li>
  ));

  return (
    <div className="py-5 lg:p-[38px] border-b-[1px] ">
      <GlobalContainer className="flex items-center justify-between">
        <div>
          <ImageComponent
            alt="hamburgermenu_logo"
            path="menu.svg"
            className="w-12 h-12"
          />
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-[50px] text-[16px] font-medium">{menus}</ul>
        </div>

        <div className="flex gap-[150px]">
          <div className="hidden lg:flex items-center gap-[30px]">
            <ImageComponent
              path="/search.svg"
              alt="Search Icon"
              className="w-6 h6"
            />
            <div className="relative">
              <ImageComponent
                path="/heart.svg"
                alt="Heart Icon"
                className="w-6 h6"
              />
              <div className="w-[18px] h-[18px] rounded-full bg-black flex justify-center items-center absolute top-1 left-3">
                <p className="text-white text-[12px]">3</p>
              </div>
            </div>
            <div className="relative">
              <ImageComponent
                path="/cart.svg"
                alt="cart Icon"
                className="w-6 h6"
              />
              <div className="w-[18px] h-[18px] rounded-full bg-black flex justify-center items-center absolute top-1 left-3">
                <p className="text-white text-[12px]">5</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[21px]">
            <ImageComponent
              path="/Admin.svg"
              alt="Admin Icon"
              className="w-6 h6"
            />
            <div>
              <p>Sign In</p>
            </div>
          </div>
        </div>
      </GlobalContainer>
    </div>
  );
};

export default Navbar;
