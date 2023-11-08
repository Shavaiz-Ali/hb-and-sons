import { Link } from 'react-router-dom';
import { NavbarData } from "../../../utils";
import {AiFillHome} from "react-icons/ai";
import {FaServicestack} from "react-icons/fa6";
import {AiFillContacts} from "react-icons/ai";
import {MdRoundaboutRight} from "react-icons/md";
import React from 'react';

const iconComponents = [AiFillHome, MdRoundaboutRight, FaServicestack, AiFillContacts];

const NavbarMobile = ({setActiveTab, activeTab}) => {
  return (
    <div className="fixed bottom-0 left-0 w-100 h-[60px] bg-white border flex justify-center items-center">
      <ul className='flex justify-between items-center w-100'>
        {NavbarData.map((item, index) => (
          <Link
            to={item.link}
            key={item.id}
            className={`flex flex-column justify-center items-center text-[16px] font-[500] text-[#000000] bg-gray-600 w-100 h-[60px] border ${activeTab === item.name ? "bg-gray-300/[0.15] text-[#D10400]" : "bg-white text-[#000000]"}`} onClick={() => setActiveTab(item.name)}
          >
            {React.createElement(iconComponents[index])}
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default NavbarMobile;
