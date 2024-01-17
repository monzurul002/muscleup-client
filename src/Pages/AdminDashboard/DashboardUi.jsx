import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ChartComponents from "../Chart/ChartComponents";
import { Link } from "react-router-dom";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaBookReader } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";
import { TiMessages } from "react-icons/ti";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdMarkUnreadChatAlt } from "react-icons/md";

const DashboardUi = () => {
    const [value, onChange] = useState(new Date());
    let date = new Date();
    const { user, logOut } = useContext(AuthContext);
    const { isAdmin } = useAdmin();

    return (
        <div className="bg-base-300 px-2  md:px-2">
            {/* navbar */}
            <div className="navbar sticky top-0 bg-base-200 shadow">
                <div className="navbar-start">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to="/" className="font-bold text-2xl">MuscleUp</Link>
                </div>
                <div className="navbar-end">

                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>

                    </button>

                    <div className="dropdown w-16  dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle  online avatar ring  ring-offset-2">
                            <div className="w-10 rounded-full">
                                <img alt="user" src="https://www.darveys.com/blog/wp-content/uploads/2022/06/featured-image.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-1 shadow menu menu-sm dropdown-content text-slate-600 bg-base-100 rounded-box w-52">
                            <li className="py-1">
                                <Link to="/dashboard/myprofile" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li className="p-1"><a>Settings</a></li>
                            <li><button onClick={logOut} className="mx-2 mb-2 btn bg-red-600 py-3 hover:bg-red-700 text-white">Log Out</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Welcome section */}
            <div className="rounded-lg   my-2 px-4   bg-gradient-to-r  from-[#9263de]  to-blue-400 text-white  ">
                <div className="flex flex-col md:flex-row items-center justify-between">

                    <div >
                        <p className="text-white">{date.toDateString()}</p>
                        <h1 className="text-2xl">Welcome back, {user?.displayName}</h1>
                        <p className="text-slate-200">Always stay updated to see all activities.</p>
                    </div>
                    <div className="">
                        <img className="rounded-lg h-24" src="https://i.ibb.co/ky0d42z/avatar-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
            {/* all teacher , student  statictics */}
            <div className="bg-white grid grid-cols-2 gap-4 py-4 px-10 rounded-md my-3 md:grid-cols-4">
                <div className="flex gap-2">
                    <div className="w-14 h-14 flex justify-center items-center rounded-full bg-indigo-900 text-center"><PiStudentBold className="text-white text-2xl inline-block" /></div>
                    <div>
                        <p className="mt-1 text-slate-500 font-bold">Students</p>
                        <p className="text-xl font-bold text-indigo-800">963</p>
                    </div>
                </div>
                {/* teacher */}
                <div className="flex gap-2">
                    <div className="w-14 h-14 flex justify-center items-center rounded-full bg-warning text-center"><GiTeacher className="text-white text-2xl inline-block" /></div>
                    <div>
                        <p className="mt-1 text-slate-500 font-bold">Teachers</p>
                        <p className="text-xl font-bold text-indigo-800">15</p>
                    </div>
                </div>
                {/* instructor */}
                <div className="flex gap-2">
                    <div className="w-14 h-14 flex justify-center items-center rounded-full bg-cyan-700 text-center"><LiaChalkboardTeacherSolid
                        className="text-white text-2xl inline-block" /></div>
                    <div>
                        <p className="mt-1 text-slate-500 font-bold">Instructor</p>
                        <p className="text-xl font-bold text-indigo-800">19</p>
                    </div>
                </div>
                {/* total course */}
                <div className="flex gap-2">
                    <div className="w-14 h-14 flex justify-center items-center rounded-full bg-red-600 text-center"><FaBookReader
                        className="text-white text-2xl inline-block" /></div>
                    <div>
                        <p className="mt-1 text-slate-500 font-bold">Couress</p>
                        <p className="text-xl font-bold text-cyan-800">56</p>
                    </div>
                </div>


            </div>

            <div className="grid grid-cols-8" >
                <div className="col-span-8 md:col-span-6 ">
                    <div className="flex flex-col md:flex-row">
                        <div className=" p-2  bg-white mt-5 m-2 rounded-lg w-96">
                            <h3 className='p-2 pt-3 font-bold text-center text-rose-800'>Schedule Time</h3>
                            <Calendar className="p-4" onChange={onChange} value={value} />
                        </div>
                        <ChartComponents></ChartComponents>

                    </div>
                </div>
                <div className="col-span-8 md:col-span-2 mt-4 px-1 ">
                    {
                        isAdmin?.admin ? <div>
                            <div className="flex justify-between px-2">
                                <h3 className=" pb-3 font-bold">Course Instructor</h3>
                                <button className=" text-indigo-500 font-semibold text-sm">See all</button>
                            </div>
                            <div className="px-3 py-2">
                                <div className="avatar px-4 ">
                                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJAP6ECfdaqvpkgeEOf9xh3DJW1AbJXH-a18WydqqPQ&s" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.pinimg.com/originals/7d/34/d9/7d34d9d53640af5cfd2614c57dfa7f13.png" />
                                    </div>
                                </div>
                                <div className="avatar px-4">
                                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>

                            {/* complain box */}
                            <div className="py-5 mx-3">
                                <div className="flex justify-between px-2">
                                    <h3 className=" pb-3 font-bold text-rose-600 ">Complain corner</h3>
                                    <button className=" text-indigo-500 font-semibold text-sm">See all</button>
                                </div>
                                <div className="px-4 bg-white rounded-lg">
                                    <div className="py-2">
                                        <h4 className="font-bold py-1 text-rose-500 ">Accept the course</h4>
                                        <p className="text-slate-600">Please, accept the course when you will available.</p>
                                    </div>
                                    <div className="py-2">
                                        <h4 className="font-bold  py-1 text-rose-600 ">Quick payment</h4>
                                        <p className="text-slate-600">Alreasy 10 days have passed, payemnt must be cleared.</p>
                                    </div>
                                </div>
                            </div>
                        </div> : <div className="px-4 bg-white h-64">
                            <h2 className="ml-2 py-2 font-bold px-2 text-xl"> <TiMessages className="inline px-1 text-3xl text-blue-700" />Admin Message
                            </h2>
                            <div className="flex gap-1 justify-between items-center">
                                <p className="text-slate-500 underline font-bold">1. Course finish ontime. </p> <MdMarkUnreadChatAlt
                                    className="text-red-500 text-xl  font-bold " />
                            </div>
                            <div className="flex gap-1 justify-between items-center">
                                <p className="text-slate-500 underline font-bold">2. Join meet at 9pm. </p> <MdMarkUnreadChatAlt
                                    className="text-red-500 text-xl  font-bold " />
                            </div>

                        </div>
                    }


                </div>

            </div>
        </div>

    );
};

export default DashboardUi;