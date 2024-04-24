import { Outlet } from "react-router-dom";
import Navbar from "../components/Layouts/Navbar";
import Sidebar from "../components/Layouts/Sidebar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
