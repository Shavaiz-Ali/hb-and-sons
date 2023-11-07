import img1 from "/v3.png"
import img2 from "/v2.png"
import img3 from "/Vector.png"
import { Navbar } from "../navbar/Navbar"
const Header = () => {
  return (
    <div className="w-100  shadow-lg  py-2">
        <div className="container flex justify-center items-center flex-col gap-3">
            <div className="flex justify-between items-center w-100">
                <div className="flex justify-center items-center gap-4">
                    <h3 className="flex justify-center items-center gap-2 text-[#D10400] font-[500] text-[16px]">
                        <img src={img3} alt="massage icon" />
                        abcdef@gmail.com
                    </h3>
                    <h3 className="flex justify-center items-center gap-2 text-[#D10400] font-[500] text-[16px]">
                        <img src={img2} alt="massage icon" />
                        605-646-9841
                    </h3>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <h3 className="flex justify-center items-center gap-2 text-[#313131] font-[500] text-[14px]">
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
