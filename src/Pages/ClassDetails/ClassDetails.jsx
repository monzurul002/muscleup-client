import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { MdOutlineMail } from "react-icons/md";
import { PiOfficeChairThin } from "react-icons/pi";
import { BsCart } from "react-icons/bs";
import img1 from "../../assets/catchdiv.png"
import { BiDislike, BiLike, BiSolidLike } from "react-icons/bi";


const ClassDetails = () => {
    const { id } = useParams();

    const { isAdmin } = useAdmin();
    const { data: course = {} } = useQuery({
        queryKey: ["classes", id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/classes/${id}`)
            return res.data
        }
    })
    console.log(course);


    return (
        <div className="pt-16 w-full md:w-11/12 py-10 mx-auto">

            <div className="text-sm breadcrumbs pt-4 ">
                <ul>
                    <li className="text-blue-500 font-bold">
                        <Link to="/courses">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Courses
                        </Link>
                    </li>
                    <li>  Details   </li>

                </ul>
            </div>
            <div className="grid md:grid-cols-8">
                <div className="col-span-3">
                    <div key={course._id} className={`card w-96 ${course.availableSeat == 0 ? "bg-red-500 text-white" : "bg-base-100"}  shadow-xl`}>
                        <figure className="px-10 pt-10">
                            <p className="absolute top-12 text-white rounded-md px-1 bg-secondary right-12">Offline</p>
                            <img style={{ width: "300px", height: "200px" }} src={course?.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className={`card-body ps-12 `}>
                            <h2 className="card-title">{course?.courseName}</h2>
                            <p><MdOutlineMail className="inline text-slate-800 mr-1 " />
                                {course?.instructorEmail}</p>
                            <p className=""><PiOfficeChairThin className="inline mr-1" />
                                Available Seat:{course?.availableSeat}</p>
                            <div className="avatar flex justify-center items-center gap-2">
                                <div className="w-10 my-2 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                                <p className="text-slate-600">By {course.instructorName}</p>
                                <p className="text-2xl font-bold text-slate-500">${course.price}</p>
                            </div>
                            <div className="w-full">

                                <button disabled={course.availableSeat === 0 || isAdmin} className=" btn hover:border-b-2 border-indigo-500 w-full  btn-sm hover:text-indigo-800"> <BsCart className="inline " />
                                    Add to Cart</button>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="col-span-5 pt-5 px-8">
                    <h2 className="text-2xl font-bold py-2 text-cyan-800">{course?.courseName ? course?.courseName : "Best Selling course."}</h2>
                    <p className=" py-2 text-slate-600">{course?.shortDescription ? course?.shortDescription : "Learning is the process of acquiring new understanding, knowledge, behaviors, skills, values, attitudes, and preferences. The ability to learn is possessed by humans, animals, and some machines; there is also evidence for some kind of learning in certain plants.Learning is the process of acquiring new understanding, knowledge, behaviors, skills, values, attitudes, and preferences. The ability to learn is possessed by humans, animals, and some machines; there is also evidence for some kind of learning in certain plants"}</p>
                    <div className="bg-slate-100 p-4 rounded-lg mt-10 relative" >
                        <div>
                            <img src={img1} className="top-[-78px] right-0 absolute" alt="" />
                        </div>
                        <h3 className="py-2 font-bold">In this coursec, You will learn how to</h3>
                        <div className="w-11/12 mx-auto flex ">
                            <div className="w-1/2">
                                <div className="flex justify-center  ">
                                    <input type="checkbox" checked="checked" className="checkbox checkbox-info checkbox-xs mt-2 mr-2 " />
                                    <p>how to identify, treat and prevent the spread of a range .</p>
                                </div>
                                <div className="flex justify-center items-center ">
                                    <input type="checkbox" checked="checked" className="checkbox checkbox-info checkbox-xs mt-2 mr-2 " />
                                    <p>Describe the various legal issues that a caregiver must consider when working</p>
                                </div>
                                <div className="flex justify-center items-center ">
                                    <input type="checkbox" checked="checked" className="checkbox checkbox-info checkbox-xs mt-2 mr-2 " />
                                    <p>Outline the fundamental roles and responsibilities.</p>
                                </div>

                            </div>
                            <div className="w-1/2">
                                <div className="flex  ">
                                    <input type="checkbox" checked="checked" className="checkbox checkbox-info checkbox-xs mt-2  mr-2 text-white " />
                                    <p>Identify the correct actions</p>
                                </div>
                                <div className="flex justify-center items-center ">
                                    <input type="checkbox" checked="checked" className="checkbox checkbox-info checkbox-xs mr-2" />
                                    <p>take in the event of various medical emergencies</p>
                                </div>
                                <div className="flex justify-center items-center ">
                                    <input type="checkbox" checked="checked" className="checkbox checkbox-info checkbox-xs mr-2" />
                                    <p>Outline the fundamental roles and responsibilities.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* learner review  */}
                    <div className="p-8 w-full md:w-10/12">
                        <h2 className="text-2xl font-bold">Learner Reviews & Feedback </h2>
                        <div className="border p-3">
                            <div className="flex gap-2 justify-start items-center ">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <h2 className="font-bold">Monzurul Islam</h2>
                            </div>
                            <p className="pt-3">Very interesting and refreshing course indeed enjoyed every piece, of its module. thanks Alison for these courses</p>
                            <p className="text-sm">Was this review helpfull?</p>
                            <div className="flex gap-5 text-2xl pt-2 ">
                                <BiLike />
                                <BiDislike />
                                <p className="link text-xs">Report</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ClassDetails;