import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const LetestCourse = () => {

    return (
        <div className="w-11/12 mx-auto">

            <div className="text-center py-3">
                <h4 className="text-xl">Learn from me</h4>
                <h1 className="text-6xl">Latest Courses</h1>
                <p className="text-secondary">Enroll and Become Better.</p>
            </div>

            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://themes.pixelwars.org/efor/demo-06/wp-content/uploads/sites/9/2019/05/course3-1-550x362.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Nutrition: Build Your Perfect Diet & Meal Plan</h2>


                            </div>
                        </div>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://themes.pixelwars.org/efor/demo-06/wp-content/uploads/sites/9/2019/05/course8-1-550x362.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Complete networking courses.</h2>


                            </div>
                        </div>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://themes.pixelwars.org/efor/demo-06/wp-content/uploads/sites/9/2019/05/course4-1-550x362.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Complete networking courses.</h2>


                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://themes.pixelwars.org/efor/demo-06/wp-content/uploads/sites/9/2019/05/course1-1-1-550x362.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Nutrition: Build Your Perfect Diet & Meal Plan</h2>


                            </div>
                        </div>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://themes.pixelwars.org/efor/demo-06/wp-content/uploads/sites/9/2019/05/course4-1-550x362.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Complete networking courses.</h2>


                            </div>
                        </div>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://themes.pixelwars.org/efor/demo-06/wp-content/uploads/sites/9/2019/05/course4-1-550x362.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Complete networking courses.</h2>


                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://themes.pixelwars.org/efor/demo-06/wp-content/uploads/sites/9/2019/05/course1-1-1-550x362.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Nutrition: Build Your Perfect Diet & Meal Plan</h2>


                            </div>
                        </div>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://themes.pixelwars.org/efor/demo-06/wp-content/uploads/sites/9/2019/05/course4-1-550x362.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Complete networking courses.</h2>


                            </div>
                        </div>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://themes.pixelwars.org/efor/demo-06/wp-content/uploads/sites/9/2019/05/course4-1-550x362.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Complete networking courses.</h2>


                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://themes.pixelwars.org/efor/demo-06/wp-content/uploads/sites/9/2019/05/course1-1-1-550x362.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Nutrition: Build Your Perfect Diet & Meal Plan</h2>


                            </div>
                        </div>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://themes.pixelwars.org/efor/demo-06/wp-content/uploads/sites/9/2019/05/course4-1-550x362.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Complete networking courses.</h2>


                            </div>
                        </div>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://themes.pixelwars.org/efor/demo-06/wp-content/uploads/sites/9/2019/05/course4-1-550x362.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Complete networking courses.</h2>


                            </div>
                        </div>
                    </div>
                </SwiperSlide>



            </Swiper>


        </div>
    );
};

export default LetestCourse;