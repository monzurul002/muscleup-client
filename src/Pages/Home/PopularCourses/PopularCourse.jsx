import "./PopularCourse.css"
import ad from "../../../assets/ad.png"
import useCourses from "../../../hooks/useCourses";
import Slide from 'react-reveal/Slide';
import { CiStopwatch } from "react-icons/ci";
import { LuGraduationCap } from "react-icons/lu";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import useCart from "../../../hooks/useCart";

const PopularCourse = () => {
    const { courses } = useCourses();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    //jst for refeth 
    const { refetch } = useCart();
    const handleAddToCart = async (course) => {
        if (!user) {
            toast("Login first for adding to cart.")
            return navigate("/login")
        }
        course.email = user?.email
        await axios.post("http://localhost:5000/carts", course)
            .then(res => {
                if (res.data.insertedId) {
                    refetch()
                    return toast.success(`${course?.courseName} has been added to cart.`)
                }
            })
    }



    return (
        <Slide bottom>
            <div>
                <h2 className="text-3xl  py-6 px-16  font-extrabold ">Most popular <span className="text-cyan-700">Courses</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-8">
                    <div className="col-span-7">
                        <div style={{

                        }} className="grid grid-cols-1 py-3  md:grid-cols-3 px-5 md:px-14">
                            {
                                courses && courses.slice(0, 6).map(item => {
                                    return <div key={item?._id} className="card card-compact mx-1 md:mx-3 my-3 bg-base-100 shadow-xl">
                                        <figure><img src={item?.image} style={{ width: '100%', height: '200px' }} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className=" text-xl font-semibold">{item?.courseName}</h2>
                                            <div className="flex justify-between gap-20  font-semibold">
                                                <p><CiStopwatch className="inline" /> {item?.duration ? item?.duration : "Around 6 months."}</p>
                                                <p><LuGraduationCap className="inline mb-1 mr-1" />{item?.enrolledStudents ? item?.enrolledStudents : "2282"} </p>
                                            </div>
                                            <div className="flex w-full  justify-between items-center">
                                                <div className="w-1/2" >
                                                    <img title={item?.instructorName} className="w-10 rounded-full h-10" src={item.authorImage ? item.authorImage : "https://img1.pnghut.com/21/10/7/s1X3prmxwm/frame-flower-tree-heart-watercolor.jpg"} alt="" />
                                                    <p className="font-semibold"> {item?.instructorName} </p>
                                                </div>
                                                <div>
                                                    <p className="font-bold w-1/2 text-xl ml-2">${item?.price}</p>
                                                </div>
                                            </div>
                                            <div className="card-actions justify-end ">

                                                <Link to={`/classes/${item?._id}`} > <button className="btn btn-success hover:bg-green-700  text-white btn-xs ">More Info</button></Link>
                                                <button onClick={() => handleAddToCart(item)} className="btn btn-success text-white btn-xs">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>

                                })
                            }

                        </div>
                    </div>
                    <div className="col-span-1 hidden shadow-md md:block mt-7">
                        <img className="animate-pulse w-full" src={ad} alt="col-span-1" />
                        <p className="text-slate-600 font-semibold pt-2  ">In simple terms: Learning is a lifelong process of transforming information and experience into knowledge, skills, and behaviours</p>
                    </div>
                </div>
            </div>
        </Slide>

    );
};

export default PopularCourse;
