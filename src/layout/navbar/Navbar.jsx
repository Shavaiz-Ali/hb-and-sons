import { useState, useEffect } from "react";
import logo from "/image.png";
import { Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
import { NavbarData } from "../../utils";
import Button from "../../components/button/Button"
// import { FaBarsStaggered } from "react-icons/fa6";
export const Navbar = () => {
  const [navbarPc, setNavbarPc] = useState(true);
  const [mobileNav, setMobilenav] = useState(false);
  // const [showNav, setShowNav] = useState(false)
  const [activeTab, setActiveTab] = useState("Home");

    useEffect(() =>{
      let responsiveNavbar = () =>{
          if(window.innerWidth <= 980){
            setNavbarPc(false)
            setMobilenav(true)
          } else{
            setNavbarPc(true)
            setMobilenav(false)
          }
      }
      responsiveNavbar();
      window.addEventListener("resize", responsiveNavbar);
  })
  return (
    <nav className="flex justify-between items-center w-100">
      <div className="flex justify-center items-center gap-3 ">
        {/* <FaBarsStaggered className="text-[2rem] text-[#D10400] font-[500] lg:d-none cursor-pointer" onClick={() => setShowNav(!showNav)}/> */}
        <img src={logo} alt="logo image" className="sm:w-100 w-[110px]" />
      </div>
      { navbarPc && 
                <ul className="flex justify-center items-center gap-4">
                    {
                        NavbarData.map((item) =>{
                            return(
                                <Link to={item.link} key={item.id} className={`text-[16px] font-[500] ${activeTab === item.name ? "text-[#D10400]":"text-[#000000]}" }`} onClick={() => setActiveTab(item.name)}>
                                  {item.name}
                                </Link>
                            )
                        })
                    }
                </ul>
            }
      <Button className="flex justify-center items-center hover:bg-[#D10400] hover:text-white text-[#D10400] transition-all duration-300 ease-in-out border-1 border-[#D10400] sm:px-[40px] px-[15px] sm:py-[12px] py-[6px] text-[#ED1C24] sm:font-[600] font-[400] font-serif rounded-full" text="Rigister/Login" />

      {
        mobileNav && (
          <NavbarMobile activeTab={activeTab} setActiveTab={setActiveTab}/>
        )
      }
    </nav>
  );
};