import { useState } from "react"
import { NavbarData } from "../../../utils"
import logo from "/image.png"
export const Navbar = () =>{
   const[activeTab, setActiveTab] =  useState("Home")
    return(
        <div className="flex justify-between items-center w-100">
            <img src={logo} alt="logo image" />
          <ul className="flex justify-center items-center gap-4">
            {
                NavbarData.map((item) =>(
                    <li key={item.id}>
                        <a href={item.link} className={`text-[16px] font-[500] ${activeTab === item.name ? "text-[#D10400]" : " text-[#000000]"}`} onClick={() => setActiveTab(item.name)}>{item.name}</a>
                    </li>
                ))
            }
          </ul>
          <div className="flex justify-center items-center border-1 border-[#D10400] px-[90px] py-[15px] text-[#ED1C24] font-[600] rounded-full">
            <a href="#">Rigister</a>
            <span>/</span>
            <a href="#">Login</a>
          </div>
        </div>
    )
}