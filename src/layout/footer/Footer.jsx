import {FooterData} from "../../utils";
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineDribbble} from 'react-icons/ai';
import {BsYoutube} from 'react-icons/bs';
import {FaXTwitter} from 'react-icons/fa6';
import {SiMinutemailer} from "react-icons/si"
import logo from "/image.png";
import Wrapper from '../../components/wrapper/Wrapper';
import {Link} from "react-router-dom";
const Footer = () =>{
    return(
        <Wrapper className="lg:flex justify-between items-center py-[100px]">
            <div className="flex flex-col justify-start items-start gap-3">
                <img src={logo} alt="footer logo image"/>
                <div className= "flex justify-center items-center gap-3">
                    <Link to="/" className="h-[35px] w-[35px] bg-gray-400/[0.15] rounded-full flex justify-center items-center"><AiOutlineInstagram /></Link>
                    <Link to="/" className="h-[35px] w-[35px] bg-gray-400/[0.15] rounded-full flex justify-center items-center"><AiOutlineDribbble /></Link>
                    <Link to="/" className="h-[35px] w-[35px] bg-gray-400/[0.15] rounded-full flex justify-center items-center"><FaXTwitter /></Link>
                    <Link to="/" className="h-[35px] w-[35px] bg-gray-400/[0.15] rounded-full flex justify-center items-center"><BsYoutube /></Link>
                </div>
                <p className="flex flex-col justify-start items-start text-[#313131] font-[400] text-[14px] leading-[20px]">Copyright © 2023 HB AND SONS LLC.
                    <span>All rights reserved</span>
                </p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 lg:w-auto w-[100%] lg:mt-0  mt-[25px]">
                {
                    FooterData.map((item) => (
                        <div className="flex flex-col jusitfy-start items-start" key={item.id}>
                            <h1 className="text-[#313131] font-[600] text-[20px] leading-[28px] ">{item.name}</h1>
                            {
                                item.Links.map((item) => (
                                    <Link to={item.link} key={item.id} className="text-[#313131] font-[400] text-[14px] leading-[20px] mt-[10px]">{item.name}</Link>
                                ))
                            }
                        </div>
                    ))
                }
                <div className="flex flex-col justify-start items-start sm:gap-5 gap-3 lg:mt-0  mt-[25px]">
                    <h3 className="text-[#313131] font-[600] text-[20px] leading-[28px] ">Stay up to date</h3>
                    <div className="flex justify-between items-center h-[40px] w-[255px] bg-[#F4777C]/[0.20] px-[10px]">
                        <input type="text" placeholder="Enter email address" className="text-[#313131] font-[400] text-[14px] leading-[20px] h-[30px] bg-transparent outline-none"/>
                        <SiMinutemailer />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Footer