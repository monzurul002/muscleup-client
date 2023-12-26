import "./PopularCourse.css"
import bg from "../../../assets/popularbg.jpg"
import useCourses from "../../../hooks/useCourses";
import Slide from 'react-reveal/Slide';
import { CiStopwatch } from "react-icons/ci";
import { LuGraduationCap } from "react-icons/lu";

const PopularCourse = () => {
    const { courses } = useCourses()
    return (
        <Slide bottom>
            <div>
                <h2 className="text-3xl  py-6 px-16  font-extrabold ">Most popular <span className="text-cyan-700">Courses</span></h2>
                <div style={{
                    // backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat"
                }} className="grid grid-cols-1 py-3  md:grid-cols-4 px-4 md:px-16">
                    {
                        courses && courses.slice(0, 8).map(item => {
                            return <div className="card card-compact mx-1 md:mx-3 my-3 bg-base-100 shadow-xl">
                                <figure><img src={item.imageLink} style={{ width: '100%', height: '200px' }} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className=" font-semibold">{item?.courseName}</h2>
                                    <div className="flex justify-between  font-semibold">
                                        <p><CiStopwatch className="inline" /> {item?.duration}</p>
                                        <p><LuGraduationCap className="inline mb-1 mr-1" />{item?.enrolledStudents} Students</p>
                                    </div>
                                    <div className="flex w-full  justify-between items-center">
                                        <div className="w-1/2" >
                                            <img title={item?.instructorName} className="w-10 rounded-full h-10" src={item.authorImage} alt="" />
                                            <p className="font-semibold">Instructor:  {item?.instructorName} </p>
                                        </div>
                                        <div>
                                            <p className="font-bold w-1/2 text-xl ml-2">${item?.price}</p>
                                        </div>
                                    </div>
                                    <div className="card-actions justify-end ">
                                        <button className="btn btn-success hover:bg-green-700  text-white btn-xs ">More Info</button>
                                        <button className="btn btn-success text-white btn-xs">Enroll</button>
                                    </div>
                                </div>
                            </div>

                        })
                    }

                </div>
            </div>
        </Slide>

    );
};

export default PopularCourse;
