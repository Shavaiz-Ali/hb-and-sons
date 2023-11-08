import img1 from "/v3.png"
import img2 from "/v2.png"
import img3 from "/Vector.png"
import { Navbar } from "../home/navbar/Navbar"
const Header = () => {
  return (
    <div className="w-100 shadow-lg  py-2 md:px-0 px-[10px]">
        <div className="md:container mx-auto flex justify-center items-center flex-col gap-3">
            <div className="flex justify-between items-center w-100">
                <div className="flex justify-center items-center gap-4">
                    <h3 className="flex justify-center items-center gap-2 text-[#D10400] sm:font-[500] sm:text-[16px] text-[14px] font-[300]">
                        <img src={img3} alt="massage icon" />
                        abcdef@gmail.com
                    </h3>
                    <h3 className="flex justify-center items-center gap-2 text-[#D10400] sm:font-[500] sm:text-[16px] text-[14px] font-[300]">
                        <img src={img2} alt="massage icon" />
                        605-646-9841
                    </h3>
                </div>
                <div className="sm:flex d-none justify-center items-center gap-4">
                    <h3 className="flex justify-center items-center gap-2 text-[#313131] sm:font-[500] sm:text-[14px] text-[12px] font-[300]">
                        <img src={img1} alt="massage icon" />
                            8:00 AM untill 6:00 AM
                    </h3>
                </div>
            </div>
        <Navbar />
        </div>
    </div>
  )
}

export default Header
