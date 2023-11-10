import Wrapper from "../../components/wrapper/Wrapper"
import img1 from "/image-2.png"
import img2 from "/image-3.png"
import img3 from "/image-4.png"
import img4 from "/image-5.png"
import img5 from "/image-6.png"


const Clients = () => {
  return (
    <Wrapper className="bg-[#FAFAFA] flex justify-center items-center flex-column py-[62px] gap-[14px]">
      <h3 className="text-[#4D4D4D] sm:text-[36px] text-[24px] font-[600] sm:leading-[44px] leading-[30px] text-center">Working with Fortune <span className="text-[#D10400]">500+ clients</span></h3>
      <p className="text-[#717171] text-[18px] font-[400] leading-[24px]">Join us in our journey to success.</p>
      <div className="flex flex-wrap justify-center items-center lg:gap-[120px] gap-7">
        <img src={img1} alt="logo 1" className="h-[62px] w-[62px]"/>
        <img src={img2} alt="logo 2" className="h-[62px] w-[62px]"/>
        <img src={img3} alt="logo 3" className="h-[62px] w-[62px]"/>
        <img src={img4} alt="logo 4" className="h-[62px] w-[62px]"/>
        <img src={img5} alt="logo 5" className="h-[62px] w-[62px]"/>
      </div>
    </Wrapper>
  )
}

export default Clients
