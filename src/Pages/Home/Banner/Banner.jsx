import bg from "../../../assets/banner-bg.jpg";
import banner from "../../../assets/slider/banner.png"
import Slide from 'react-reveal/Slide';
import { EffectCards, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import slider1 from "../../../assets//slider/slider1.png"
import slider2 from "../../../assets//slider/slider2.png"
import slider3 from "../../../assets//slider/slider3.png"
import slider4 from "../../../assets//slider/slider4.png"


const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${bg})`
        }} className=" pt-32 pb-5 px-10 w-full flex flex-col md:flex-row lg:flex-row">
            <Slide left>
                <div className="w-full md:w-1/2 ">
                    <h3 className="bg-slate-700 p-2  rounded-bl-lg inline-block font-semibold rounded-r-lg  opacity-100 "><span className="text-white">I AM A LIFE COACH.</span></h3>
                    <h1 className=" text-4xl md:text-6xl font-bold text-white "><span className="border-b-4 my-3 mr-4 border-indigo-500 inline-block  animate-bounce">Struggling </span> in <span className="border rounded-lg py-3 px-5 text-red-500">life?</span> <br />
                        I can <span className="border-b-4 border rounded-lg py-3 px-5 text-green-500	 border-secondary animate-pulse inline-block">help</span></h1>
                    <p className="text-xl my-3 text-white">Discover the simple 3 Steps that I Discovered to Hack Productivity.It works %100. Wanna transform your life?</p>
                    <button className="bg-gradient-to-r from-yellow-500 from-10%  to-red-700     btn text-white font-thin py-1 my-16 px-12 text-xl"> Get Your Free Guide Now.</button>
                </div>
            </Slide>
            <Slide right>
                <div className="w-full md:w-1/2 mx-auto " >
                    <>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards, Autoplay]}
                            className="mySwiper"

                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                        >
                            <SwiperSlide><img src={banner} className=" rounded-lg w-3/5" alt="" /></SwiperSlide>
                            <SwiperSlide><img src={slider1} className="rounded-lg w-3/5" alt="" /></SwiperSlide>
                            <SwiperSlide><img src={slider2} className="rounded-lg w-3/5" alt="" /></SwiperSlide>
                            <SwiperSlide><img src={slider3} className="rounded-lg w-3/5" alt="" /></SwiperSlide>
                            <SwiperSlide><img src={slider4} className="rounded-lg w-3/5" alt="" /></SwiperSlide>

                        </Swiper>
                        <div className="absolute bottom-0 right-0 animate-bounce mx-10"><img src="https://edublink.co/images/shape-01.png" alt="" /></div>
                    </>
                    <img className="ps-12 animate-bounce mt-5" src="https://edublink.co/images/shape-02.png" alt="" />
                </div>
            </Slide>
        </div >
    );
};

export default Banner;