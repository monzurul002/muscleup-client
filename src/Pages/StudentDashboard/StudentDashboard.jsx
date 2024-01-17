import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";
import Chart2 from "./Chart2";
import img1 from "../../assets/Screenshot_1.png"
import img2 from "../../assets/Screenshot_2.png"
import img3 from "../../assets/Screenshot_3.png"
const StudentDashboard = () => {
    const date = new Date();
    const { user } = useContext(AuthContext)
    return (
        <div className="bg-base-200 py-4 w-11/12 mx-auto">
            {/* Welcome section */}
            <div className="rounded-lg   my-2 px-4   bg-gradient-to-r  from-[#9263de]  to-blue-400 text-white  ">
                <div className="flex flex-col md:flex-row items-center justify-between">

                    <div >
                        <p className="text-white">{date.toDateString()}</p>
                        <h1 className="text-2xl">Welcome back, {user?.displayName}</h1>
                        <p className="text-slate-200">Always stay updated to see all activities.</p>
                    </div>

                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="">
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                    </div>

                    <div className="">
                        <img className="rounded-lg h-24" src="https://i.ibb.co/ky0d42z/avatar-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>

            {/* Active course */}
            <h2 className="text-xl py-4 ml-6 text-cyan-600 font-bold">Active Course </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 px-2">
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src="https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Javascript you need to know.</h2>
                        <div className="flex justify-between">
                            <div>
                                <p>
                                    <MdOutlineLibraryBooks className="inline" />
                                    35 Classes</p>
                                <p><IoTimeOutline className="inline" /> 2h 30mins</p>
                            </div>
                            <div className="radial-progress" style={{ "--value": "70", "--size": "3rem", "--thickness": "2px" }} role="progressbar">70%</div>
                        </div>
                        <div className="">
                            <button className="btn mt-4 bg-green-500 text-white (condition) {
                                
                            } w-full">Continue</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src="https://eduguide.co.in/wp-content/uploads/2020/03/ggti_2.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Networking Methods</h2>
                        <div className="flex justify-between">
                            <div>
                                <p>
                                    <MdOutlineLibraryBooks className="inline" />
                                    35 Classes</p>
                                <p><IoTimeOutline className="inline" /> 4h 11mins</p>
                            </div>
                            <div className="radial-progress" style={{ "--value": "30", "--size": "3rem", "--thickness": "2px" }} role="progressbar">30%</div>
                        </div>
                        <div className="mt-7">
                            <button className="btn bg-green-500 text-white  mt-2 w-full">Continue</button>
                        </div>
                    </div>
                </div>

                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src="https://5.imimg.com/data5/SELLER/Default/2023/1/BB/MM/EE/16435775/python-training-service.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Python Course </h2>
                        <div className="flex justify-between">
                            <div>
                                <p>
                                    <MdOutlineLibraryBooks className="inline" />
                                    25 Classes</p>
                                <p><IoTimeOutline className="inline" /> 7h 30mins</p>
                            </div>
                            <div className="radial-progress" style={{ "--value": "100", "--size": "3rem", "--thickness": "2px" }} role="progressbar">100%</div>
                        </div>
                        <div className="mt-7">
                            <button className="btn bg-green-500 text-white  mt-2 w-full">Continue</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-1 md:col-span-3">
                    <div className="px-3 rounded-lg">
                        <Chart2></Chart2>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-1 ">
                    <div className=" md:w-64 w-11/12 mx-3 md:mx-auto  rounded-lg bg-base-100 shadow-xl">
                        <figure className="px-5 pt-3">
                            <img src={img1} alt="Shoes" className="rounded-xl w-full" />
                        </figure>
                        <div className="py-2 text-slate-600 text-center">
                            <h2 className="">Mobile App Design</h2>
                            <p>12 lessons</p>

                        </div>
                    </div>
                    <div className=" md:w-64 w-11/12 my-2 mx-3 md:mx-auto   rounded-lg bg-base-100 shadow-xl">
                        <figure className="px-5 pt-3">
                            <img src={img2} alt="Shoes" className="rounded-xl w-full" />
                        </figure>
                        <div className="py-2 text-slate-600 text-center">
                            <h2 className="">Photo Edit</h2>
                            <p>46 lessons</p>

                        </div>
                    </div>
                    <div className="md:w-64 w-11/12 my-2 mx-3 md:mx-auto  rounded-lg bg-base-100 shadow-xl">
                        <figure className="px-5 pt-3">
                            <img src={img3} alt="Shoes" className="rounded-xl w-full" />
                        </figure>
                        <div className="py-2 text-slate-600 text-center">
                            <h2 className="">Digital Marketing</h2>
                            <p>32 lessons</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default StudentDashboard;