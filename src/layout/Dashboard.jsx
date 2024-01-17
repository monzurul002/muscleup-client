import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Loading from "../Pages/Loading/Loading";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { MdDashboard, MdMarkChatUnread, MdOutlinePlayLesson, MdPlayLesson, MdPostAdd } from "react-icons/md";
import { FaBookReader, FaUserEdit } from "react-icons/fa";
import { LuUserCog } from "react-icons/lu";
import logo from "../assets/logo2.png"
import Footer from "../Pages/Footer/Footer";

import { TfiWrite } from "react-icons/tfi";

const Dashboard = () => {
    const { loading } = useContext(AuthContext);
    const { isAdmin, adminLoading } = useAdmin();
    const { isInstructor } = useInstructor();

    if (adminLoading || loading) {

        return <Loading></Loading>
    }

    return (
        <div>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Menu</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 min-h-full font-bold  text-slate-600 bg-slate-100 ">

                        <div className="">
                            <Link to="/"><img className="w-2/3" src={logo} alt="" /></Link>
                        </div>

                        <li>
                            <Link to={isAdmin?.admin ? `/dashboard/dashboardUi` : `/dashboard/studentdashboard`}>
                                <MdDashboard className="text-xl" />
                                Dashboard
                            </Link>
                        </li>
                        {
                            isAdmin?.admin || isInstructor?.instructor ? (<>
                                {isInstructor?.instructor === true && (
                                    <><li><Link to="/dashboard/addclass"> <MdPostAdd className="text-xl font-bold" />
                                        Add a Class</Link></li>
                                        <li><Link to="/dashboard/myclass"><FaBookReader />

                                            My Classes</Link></li></>
                                )}
                                {isAdmin?.admin === true && (
                                    <><li><Link to="/dashboard/manageclass"><MdMarkChatUnread />
                                        Manage class</Link></li>
                                        <li><Link to="/dashboard/manageusers"><LuUserCog />
                                            Manage Users</Link></li>

                                    </>

                                )}
                            </>) : <>
                                <li><Link to="/dashboard/courses"> <MdPlayLesson />
                                    My Courses</Link></li>
                                <li><Link to="/dashboard/myprofile"> <FaUserEdit className="text-xl" />
                                    My Profile</Link></li>

                            </>

                        }
                        <li><Link to="/dashboard/writeblog"> <TfiWrite className="text-md" />

                            Write Blogs</Link></li>
                    </ul>

                </div>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default Dashboard;