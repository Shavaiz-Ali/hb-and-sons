import { useState, useEffect } from "react";
import logo from "/image.png";
import { Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
import { NavbarData } from "../../../utils";

// import { FaBarsStaggered } from "react-icons/fa6";
export const Navbar = () => {
  const [navbarPc, setNavbarPc] = useState(true);
  // const [showNav, setShowNav] = useState(false)
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const responsiveness = () => {
      if (window.innerWidth < 980) {
        setNavbarPc(false);
      } else {
        setNavbarPc(true);
      }
    };

    window.addEventListener("resize", responsiveness);
    return () => {
      window.removeEventListener("resize", responsiveness);
    };
  });
  return (
    <nav className="flex justify-between items-center w-100">
      <div className="flex justify-center items-center gap-3 ">
        {/* <FaBarsStaggered className="text-[2rem] text-[#D10400] font-[500] lg:d-none cursor-pointer" onClick={() => setShowNav(!showNav)}/> */}
        <img src={logo} alt="logo image" className="sm:w-100 w-[125px]" />
      </div>
      {navbarPc ? (
        <ul className="flex justify-center items-center gap-4">
          {NavbarData.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className={`text-[16px] font-[500] ${
                activeTab === item.name ? "text-[#D10400]" : " text-[#000000]"
              }`}
              onClick={() => setActiveTab(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      ) : (
       <NavbarMobile activeTab={activeTab} setActiveTab={setActiveTab}/>
      )}
      <div className="flex justify-center items-center border-1 border-[#D10400] lg:px-[90px] sm:px-[50px] px-[30px] lg:py-[13px] sm:py-[10px] py-[8px] text-[#ED1C24] sm:font-[600] font-[500] rounded-full">
        <a href="#">Rigister</a>
        <span>/</span>
        <a href="#">Login</a>
      </div>
    </nav>
  );
};
