import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import React from "react";
import { HamNav } from "./HamNav";
import { Link } from "react-router-dom";

export const NavBar: React.FC = () => {
  const [hamTrue, setHamTrue] = useState<boolean>(false);
  return (
    <div className="w-screen h-32 flex justify-between lg:w-auto">
      <div className="w-30 h-24 px-10">
        <img src="/logo.png" alt="Logo" className="w-auto h-36 object-cover md:w-fit md:h-36" />
      </div>
      {!hamTrue?(
        <div className="md:w-1/2 flex md:justify-between md:gap-20 justify-end gap-5 m-5">
            <GiHamburgerMenu
              className="md:hidden m-auto text-3xl cursor-pointer"
              onClick={() => setHamTrue(true)}
            />
          <NavMenu/>
          <button className="text-xl font-medium  h-12 w-28 border-dotted border-2 border-indigo-600 hover:border-indigo-800 hover:border-solid m-auto ">
            Get Started
          </button>
        </div>
          ):(
        <HamNav  hamTrue= {hamTrue} setHamTrue = {setHamTrue}/>
          )}
    </div>
  );
};

const toggleBarItems = [
  {
    title: "Home",
    route: "/",
  },

  {
    title: "About",
    route: "/#about",
  },

  {
    title: "Portfolio",
    route: "/#portfolio",
  },

  {
    title: "Contact",
    route: "/#contact",
  },
];

function NavMenu() {
  return (
    <div className="md:flex justify-around align-middle items-center w-1/2 gap-7 hidden ">
      {toggleBarItems.map((item, index) => (
        <NavMenuItem route={item.route} title={item.title} key={index} />
      ))}
    </div>
  );
}


function NavMenuItem({ title,route }: { title: string; route: string }) {
  return (
      <div className="cursor-pointer text-center text-xl font-bold hover:text-2xl ">{title}</div>
  );
}
