"use client";

import { useState } from "react";
import Area from "../Common/Area";
import Logo from "../Common/Logo";
import { ButtonMenu } from "./ButtonMenu";
import Menu from "./Menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Area className="fixed top-0 z-50 left-0 right-0 bg-background">
      <div
        id="home"
        className="
          flex items-center flex-shrink-0 justify-between h-20
          max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
        "
      >
        <Logo />
        <div className="hidden md:block">
          <Menu className="ml-4 flex items-center space-x-4" />
        </div>
        <div className="-mr-2 flex md:hidden">
          <ButtonMenu toggleMenu={toggleMenu} isOpen={isOpen} />
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <Menu className="px-2 pt-2 pb-3 sm:px-3" />
      </div>
    </Area>
  );
}
