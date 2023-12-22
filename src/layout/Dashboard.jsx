import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    const userType = "admin"
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Menu</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

                    {
                        userType === "student" ? (
                            // Render these for students
                            <>
                                <li><Link to="/dashboard/courses">My Courses</Link></li>
                                <li><Link to="/dashboard/profile">My Profile</Link></li>
                            </>
                        ) : (
                            // Render these for admins and instructors
                            <>
                                <li><Link to="/dashboard/addclass">Add a Class</Link></li>
                                {userType === "instructor" && (
                                    <li><Link to="/dashboard/myclass">My Classes</Link></li>
                                )}
                                {userType === "admin" && (
                                    <li><Link to="/dashboard/manageusers">Manage Users</Link></li>
                                )}
                            </>
                        )
                    }


                    {/* {
                        instructor ? <><li><Link to="/dashboard/addclass">Add a Class</Link></li>
                            <li><Link to="/dashboard/myclass">My  Classes</Link></li></>
                            : <><li><Link to="/dashboard/carts">My Selected Classes</Link></li>
                                <li><Link to="/dashboard/carts">My Enrolled Classes</Link></li></>
                    } */}

                </ul>

            </div>
        </div>

    );
};

export default Dashboard;