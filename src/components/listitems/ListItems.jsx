import Button from "../button/Button"
const ListItems = ({heading, text}) => {
  return (
    <div className="flex flex-column justify-center items-center gap-[20px] bg-[#FFFFFF] my-[50px]">
      <h2 className="text-[#D10400] text-[40px] font-[600] leading-[48px]">{heading}</h2>
      <p  className="text-[#717171] text-[20px] font-[400] leading-[24px]">{text}</p>
      <Button className="flex justify-center items-center hover:bg-[#D10400] hover:text-white text-[#D10400] transition-all duration-300 ease-in-out border-1 border-[#D10400] sm:px-[40px] px-[15px] sm:py-[12px] py-[6px] sm:font-[600] font-[400] font-serif rounded-full" text="Get Started" />
    </div>
  )
}

export default ListItems
