import { CiShoppingBasket } from "react-icons/ci";
import "./PopularCourse.css"
import { PiStudent } from "react-icons/pi";
import { IoTimer } from "react-icons/io5";
import bg from "../../../assets/banner-bg.jpg"
import { Flip } from "react-reveal";
import useCourses from "../../../hooks/useCourses";
const PopularCourse = () => {
    const { courses } = useCourses()
    return (
        <Flip>
            <div style={{
                backgroundImage: `url(${bg})`
            }} className="grid grid-cols-1 py-8 bg-black md:grid-cols-3">
                {
                    courses && courses.slice(0, 6).map(item => {
                        return <div key={item.id} id="hero" className="hero " >

                            <div className="hero-content  border text-neutral-content">
                                <div className="text-center" >

                                    <div>
                                        <h1 className="my-2 text-2xl font-bold">{item.courseName}</h1>

                                        <p className="text-2xl text-slate-400">$50</p>

                                        {/* <p> <Rating /></p> */}
                                    </div>
                                    <div className="flex justify-evenly">
                                        <p><PiStudent className="inline-block mx-1 text-xl" /> 2380
                                        </p>
                                        <p>
                                            <IoTimer className="inline-block mx-1 text-xl" />18hr
                                        </p>
                                    </div>
                                    <button className=" bg-black text-white hover:bg-gradient-to-r from-yellow-500 from-10%  to-red-700    btn  font-thin py-1 my-4 px-12 text-xl"> <CiShoppingBasket className="text-white text-2xl" /> Buy Now</button>

                                    <img className="inline-block w-full h-60 py-4" width="300px" height="500px" src={item.imageLink} alt="" />


                                </div>



                            </div>

                        </div>
                    })
                }

            </div>
        </Flip>

    );
};

export default PopularCourse;
