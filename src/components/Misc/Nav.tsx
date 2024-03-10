import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsPeople } from "react-icons/bs";
import { GiHand } from "react-icons/gi";
import { SideBarNavProps } from "../../..";

export const SideBarNav = ({ liStyle, style, scrolled }: SideBarNavProps) => {
  return (
    <div className="">
      <ul className={` ${style}`}>
        <li>
          <Link
            to="/about"
            className={`  ${
              scrolled ? "text-black" : " text-white"
            }  ${liStyle} flex items-center  opacity-70 hover:opacity-100 duration-300 font-light`}
          >
            <BsPeople className="mr-2" />
            <p>ABOUT</p>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={` ${
              scrolled ? "text-black" : " text-white"
            }  ${liStyle} flex items-center  opacity-70 hover:opacity-100 duration-300 font-light`}
          >
            <CgProfile className="mr-2" />
            <p>CONTACT US</p>
          </Link>
        </li>

        <li>
          <Link
            to="/give"
            className={` ${
              scrolled ? "text-black" : " text-white"
            }  ${liStyle} flex   opacity-70 hover:opacity-100 duration-300 font-light `}
          >
            <GiHand className="mr-2" />
            GIVE
          </Link>
        </li>
      </ul>
    </div>
  );
};
