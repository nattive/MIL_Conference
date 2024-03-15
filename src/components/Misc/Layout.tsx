import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "../Footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header ShowHeader={true} />
      <Sidebar />
      <div className="mt-20 md:px-10 bg-white">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
