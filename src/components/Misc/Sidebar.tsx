import { useContext } from "react";
import { SideBarContext } from "../context/SidebarContext";
import { SideBarNav } from "./Nav";
import { CgClose } from "react-icons/cg";
// import { motion } from 'framer-motion'

export default function Sidebar() {
  const { Open, setOpen } = useContext(SideBarContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleSideBar: any = () => setOpen(!Open);

  return (
    <div className="wrapper md:hidden transition ">
      <div
        className={
          Open
            ? "wrapper transition w-[45%] bg-gray-100 fixed top-0 bottom-0 right-0 shadow-lg z-[100]"
            : " wrapper hidden "
        }
      >
        <SideBarNav style="relative w-full" />
      </div>

      {/* overlay */}
      <div
        className={Open ? "  absolute top-5 z-50 left-2" : "hidden "}
        onClick={toggleSideBar}
      >
        <CgClose className="text-white text-2xl cursor-pointer" />
      </div>
      <div
        className={
          Open
            ? " h-screen bg-black/90 z-30 absolute  w-screen top-0"
            : "hidden "
        }
        onClick={toggleSideBar}
      ></div>
    </div>
  );
}
