import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
interface HamMenuProps {
  hamTrue: boolean;
  setHamTrue: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HamNav: React.FC<HamMenuProps> = ({  setHamTrue }) => {
  return (
    <div className=" md:hidden text-center fixed right-0 top-0 bg-sky-200 w-60 h-80bg-indigo-500 shadow-lg shadow-indigo-500/50"
      >
        <GiHamburgerMenu
          className=" m-auto text-3xl absolute top-5 right-5 cursor-pointer"
          onClick={() => setHamTrue(false)}
        />
        <NavMenu />
      </div>
  );
};

const toggleBarItems = [
  {
    title: "About",
    route: "/about",
  },

  {
    title: "Activity",
    route: "/activity",
  },

  {
    title: "Problems",
    route: "/problems",
  },

  {
    title: "Leaderboard",
    route: "/leaderboard",
  },
];

function NavMenu() {
  return (
    <div className="md:flex justify-around align-middle items-start w-1/2 gap-7  flex flex-col cursor-pointer my-10 mx-5 ">
      {toggleBarItems.map((item, index) => (
        <NavMenuItem route={item.route} title={item.title} key={index} />
      ))}
    </div>
  );
}

function NavMenuItem({ title,route }: { title: string; route: string }) {
  return (
    <h1 className="cursor-pointer text-center text-xl font-bold hover:text-slate-700">{title}</h1>
  );
}
