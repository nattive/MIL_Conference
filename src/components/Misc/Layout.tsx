import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


export const Layout = () => {
  return (
    <>
      {/* <Header ShowHeader={true} /> */}
      <Sidebar />
      <div className="">
        <Outlet />
      </div>

    </>
  );
};
