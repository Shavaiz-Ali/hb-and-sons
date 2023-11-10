import { TestimonialsData } from "../../utils";
import Wrapper from "../../components/wrapper/Wrapper"
import { Autoplay, A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {AiOutlineArrowRight} from "react-icons/ai";
import {AiOutlineArrowLeft} from "react-icons/ai";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Testimonials = () => {
  let swiperInstance;    
  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <div className="bg-[#FAFAFA] w-100 py-[100px]">
        <Wrapper className="relative flex justify-center items-center gap-4" data-aos="fade-right"
        data-aos-offset="300" data-aos-easing="ease-in-sine">
        <Swiper
            modules={[Autoplay, A11y, Navigation, Pagination]} // Add required modules
            onSwiper={(swiper) => (swiperInstance = swiper)} // Save the swiper instance
            // slidesPerView={4}
            spaceBetween={24}
            autoplay={{ delay: 3000 }}
            slidesPerView ={1}
            className=""
        >
            {TestimonialsData.map((item) => {
            return (
                <SwiperSlide key={item.id}>
                <div key={item.id} className="md:flex justify-center items-center gap-8">
                    <img src={item.clientImg} alt="" />
                    <div className="flex flex-col justify-start items-start md:gap-4 gap-3 lg:w-[60%] md:mt-0 mt-3">
                        <img src={item.img1} alt="" className="w-[21.25px] h-[19.13px]"/>
                        <p className="text-[#717171] font-[400] sm:text-[22px] text-[18px] leading-[32px] tracking-tighter">{item.description1}</p>
                        <p className="text-[#717171] font-[400] sm:text-[22px] text-[18px] leading-[32px] tracking-tighter">{item.description2}</p>
                        <h2 className="text-[#ED1C24] font-[600] sm:text-[22px] text-[18px] leading-[10px] tracking-tighter">{item.name}</h2>
                        <h3 className="text-[#717171] font-[400] sm:text-[22px] text-[18px] tracking-tighter">{item.company}</h3>
                    </div>
                </div>
                </SwiperSlide>
            );
            })}
            <div className="absolute flex justify-start items-end gap-4 right-0 md:bottom-[55px] bottom-[0px] z-[500]">
            <button
                className="flex justify-center items-center w-[48px] h-[48px] bg-[#101010] rounded-full cursor-pointer"
                onClick={handlePrev}
            >
                <AiOutlineArrowLeft className="w-[32px] h-[32px] border-[#D10400] text-[#D10400] rounded-full cursor-pointer"/>
            </button>
            <button
                className="flex justify-center items-center w-[48px] h-[48px] bg-[#101010] rounded-full cursor-pointer"
                onClick={handleNext}
            >
                <AiOutlineArrowRight className="w-[32px] h-[32px] border-[#D10400] text-[#D10400] rounded-full cursor-pointer"/>
            </button>
            </div>
        </Swiper>
        </Wrapper>
    </div>
  )
}

export default Testimonials
