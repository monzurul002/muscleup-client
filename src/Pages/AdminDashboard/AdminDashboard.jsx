import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import img1 from "../../assets/Screenshot_1.png"
import img2 from "../../assets/Screenshot_2.png"
import img3 from "../../assets/Screenshot_3.png"
import ChartComponents from "../Chart/ChartComponents";
import { Link } from "react-router-dom";
const AdminDashboard = () => {
    const [value, onChange] = useState(new Date());
    let date = new Date();
    const { user } = useContext(AuthContext)
    return (
        <div className="bg-base-200 px-2 md:px-1">

            <div className="navbar bg-base-200 shadow">
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
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="rounded-lg m-3 p-2 bg-gradient-to-r  from-[#9263de]  to-blue-400 text-white  ">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div >
                        <p className="text-white">{date.toDateString()}</p>
                        <h1 className="text-3xl">Welcome back, {user?.displayName}</h1>
                        <p className="text-slate-300">Always stay updated to see all activities.</p>
                    </div>
                    <div className="">
                        <img className="rounded-lg h-32" src="https://i.ibb.co/ky0d42z/avatar-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-8" >
                <div className="col-span-5 ">
                    <div className="flex flex-col md:flex-row">
                        <div className=" p-5  w-72">
                            <h3 className='p-2 font-bold text-center text-xl text-rose-500'>Schedule Time</h3>
                            <Calendar className="" onChange={onChange} value={value} />
                        </div>
                        <ChartComponents></ChartComponents>

                    </div>
                </div>
                <div className="col-span-8 md:col-span-3 ">
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

export default AdminDashboard;