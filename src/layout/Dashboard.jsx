import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Loading from "../Pages/Loading/Loading";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { MdDashboard, MdMarkChatUnread, MdOutlinePlayLesson, MdPlayLesson, MdPostAdd } from "react-icons/md";
import { FaBookReader, FaUserEdit } from "react-icons/fa";
import { LuUserCog } from "react-icons/lu";

const Dashboard = () => {
    const { loading } = useContext(AuthContext);
    const { isAdmin, adminLoading } = useAdmin();
    const { isInstructor } = useInstructor();

    if (loading || adminLoading) {
        return <Loading></Loading>
    }



    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Menu</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 min-h-full font-bold text-white bg-gradient-to-b from-[#9263de]  to-blue-500  ">

                    <li><Link to="/dashboard/admindashboard"> <MdDashboard className="text-xl" />
                        Dashboard</Link></li>
                    {
                        isAdmin?.admin || isInstructor?.instructor ? (<>
                            {isInstructor?.instructor === true && (
                                <><li><Link to="/dashboard/addclass"> <MdPostAdd />
                                    Add a Class</Link></li>
                                    <li><Link to="/dashboard/myclass"><FaBookReader />

                                        My Classes</Link></li></>
                            )}
                            {isAdmin?.admin === true && (
                                <><li><Link to="/dashboard/manageclass"><MdMarkChatUnread />
                                    Manage class</Link></li>
                                    <li><Link to="/dashboard/manageusers"><LuUserCog />
                                        Manage Users</Link></li></>

                            )}
                        </>) : <>
                            <li><Link to="/dashboard/courses"> <MdPlayLesson />
                                My Courses</Link></li>
                            <li><Link to="/dashboard/profile"> <FaUserEdit className="text-xl" />
                                My Profile</Link></li>
                        </>

                    }







                </ul>

            </div>
        </div>

    );
};

export default Dashboard;