import { SideBarNav } from "./Nav.tsx";
import { useState, useEffect, useContext } from "react";
import { SideBarContext } from "../context/SidebarContext";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HeaderProps } from "../../../index";

/* Header will be an option between all pages,
 ShowHeader will be a props passed to all parent component
 if ShowHeader is true, Header will be displayed in the component and otherwise.
 Same applies for Footer
 */

export default function Header({ ShowHeader }: HeaderProps) {
  const [scrollY, setScrollY] = useState(0);
  const { Open, setOpen } = useContext(SideBarContext);
  const toggleSideBar = () => setOpen(!Open);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundColor =
    scrollY > 100
      ? "bg-white shadow-sm"
      : "bg-gray-100 border-b border-gray-200";
  const menuChange = scrollY > 100 ? "text-black" : "text-black";

  const pickScolled = scrollY > 100 ? true : false;

  return (
    <>
      {ShowHeader && (
        <div
          className={` ${backgroundColor} transition h-20 transparent fixed  drop-shadow-sm z-30 top-0 w-full `}
        >
          <div className="px-1 md:px-10 h-full mx-auto flex justify-between  items-center md:w-[80%] w-full ">
            {/* logo here*/}
            <Link className="block md:flex-1" to="/">
              <img
                src="/assets/logo.png"
                height="100"
                width="100"
                alt="image "
              />
            </Link>

            {/* menu Links */}
            <SideBarNav
              scrolled={pickScolled}
              style="hidden px-10 py-16 bg-gray-800 z-10
                        md:relative md:flex md:p-0 md:bg-transparent md:flex-row md:space-x-3"
            />

            <div className="flex items-center md:hidden">
              <button
                className="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300 "
                onClick={toggleSideBar}
              >
                <AiOutlineMenu className={menuChange} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
