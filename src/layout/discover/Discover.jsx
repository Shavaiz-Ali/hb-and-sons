
import Button from '../../components/button/Button'
import Wrapper from '../../components/wrapper/Wrapper'
import img from "/image-7.png"

const Discover = () => {
  return (
    <Wrapper className="lg:flex justify-between items-center min-h-[400px] my-[35px]">
        <div className="flex flex-col self-end">
            <img src={img} alt="image" className=''/>
        </div>
        <div className="flex flex-col justify-start items-start">
            <h3 className="sm:text-[48px] text-[30px] text-[#4D4D4D] font-[600] sm:leading-[58.09px] leading-[40px]">Discover Excellence with Hb & SONS LLC</h3>
            <p className="text-[20px] font-[400] leading-[24px] my-[20px]">Our Premier Partner in Fuel Transport and Delivery</p>
            <Button className="flex justify-center items-center hover:bg-[#D10400] hover:text-white text-[#D10400] transition-all duration-300 ease-in-out border-1 border-[#D10400] sm:px-[40px] px-[15px] sm:py-[12px] py-[6px] sm:font-[600] font-[400] font-serif rounded-full" text="Rigister/Login" />
        </div>
    </Wrapper>
  )
}

export default Discover