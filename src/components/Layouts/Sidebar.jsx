import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavbarToggle } from "../../context/NavbarToggle";
import Home from "../../pages/Home";
import { BiCameraMovie } from "react-icons/bi";

const Sidebar = () => {
  const { isNavbarToggle } = useContext(NavbarToggle);
  return (
    <>
      <div className={isNavbarToggle ? "glassmorphism z-10 lg:hidden fixed min-h-screen w-3/4 right-0 duration-500" : "fixed z-10 -right-full w-0 duration-500 min-h-screen ease-in-out"}>
        <div className="flex flex-col text-center mt-[5.2rem]">
          <h1 className="text-3xl font-bold py-4 border-b-2 tracking-wider flex justify-center items-center">
            <BiCameraMovie
              size={25}
              className="me-2"
            />
            cine<span className="text-primary italic">FLIX</span>
          </h1>

          <Link
            to="/"
            className="text-xl font-semibold hover:text-primary duration-150 py-4 "
          >
            Beranda
          </Link>
          <Link
            to="/populer"
            className="text-xl font-semibold hover:text-primary duration-150 py-4 "
          >
            Populer
          </Link>
          <Link
            to="/series"
            className="text-xl font-semibold hover:text-primary duration-150 py-4 "
          >
            Series
          </Link>
          <Link
            to="/negara"
            className="text-xl font-semibold hover:text-primary duration-150 py-4 "
          >
            Negara
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
