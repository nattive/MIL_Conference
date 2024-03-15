import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SIDEBAR_LINK } from "./all";
import { SideBarNavProps } from "../../..";

export const SideBarNav: React.FC<SideBarNavProps> = ({ style, scrolled }) => {
  const [showSubNav, setShowSubNav] = useState(false);

  const toggleSubNav = () => {
    setShowSubNav(!showSubNav);
  };

  return (
    <>
      {SIDEBAR_LINK.map((item, index: number) => (
        <ul className={`${style}`} key={index}>
          {Object.entries(item).map(([key, value]) => (
            <div
              className="flex items-center justify-between px-4 py-4 hover:bg-gray-200"
              key={key}
            >
              {key !== "hasChild" ? (
                <Link
                  to={`${value}`}
                  className={`${scrolled ? "text-black" : "text-black"}`}
                >
                  <span
                    className="block md:py-0 md:hover:bg-transparent nav_link md:text-xs text-gray-600 hover:text-gray-800 active:border-b border-gray-600"
                    onClick={toggleSubNav}
                  >
                    {key}
                  </span>
                </Link>
              ) : (
                <span className="cursor-pointer md:hidden">icon</span>
              )}
            </div>
          ))}
        </ul>
      ))}
    </>
  );
};
