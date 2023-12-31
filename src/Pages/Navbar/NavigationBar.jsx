import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaArrowRightLong, FaRegUser } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { GiShoppingBag } from "react-icons/gi";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const { carts, refetch } = useCart();
    const { isAdmin } = useAdmin()

    const navItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructor">Instructors</Link></li>
        <li><Link to="/courses">Courses</Link></li>

        {
            isAdmin?.admin || isAdmin?.instructor ? <li><Link to="/dashboard/dashboardUi">Dashboard </Link></li> : <li><Link to="/dashboard/studentdashboard">Dashboard </Link></li>
        }



    </>

    return (
        // <nav className="w-11/12 z-30 fixed bg-opacity-75 top-0 max-w-screen-lg text-white bg-black mx-auto">
        <nav className=" z-30 bg-opacity-40 bg-black w-full  px-4 text-white fixed ">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 rounded-box w-52">
                            {
                                navItem
                            }
                            {
                                !user ? <>
                                    <button className="mx-3">  <Link className="flex" to="/login">
                                        <FaRegUser className="mt-1 pr-1 " />Login
                                    </Link>
                                    </button>
                                    <button className="mx-3">  <Link className="flex" to="/register">
                                        <FaRegUser className="mt-1 pr-1 " />Register
                                    </Link>
                                    </button>
                                </>
                                    :
                                    <>
                                        <button onClick={logOut} className="mr-8 btn bg-red-600 text-white">Log Out</button>
                                        <div className="avatar online">
                                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>

                                    </>
                            }
                        </ul>
                    </div>
                    <Link to="/" className="">
                        <img src={logo} width="200px" height="50px" alt="" />
                    </Link >
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  font-bold px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <div className="flex justify-center items-center  mr-2">
                        <div className="dropdown dropdown-end">
                            <div className="drawer drawer-end z-20">
                                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

                                {/* Page content here */}
                                <label htmlFor="my-drawer-4" className="drawer-button  ">  <div className="flex cursor-pointer">
                                    <p ><GiShoppingBag className="text-2xl font-bold" /> </p>
                                    <span className="mt-[-12px] ms-[-5px]   inline-block">{carts.length}</span>
                                </div></label>

                                <div className="drawer-side mt-5 ">
                                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                                    <ul className="menu p-1 w-96 min-h-full bg-white text-base-content">
                                        {/* Sidebar content here */}
                                        <h2 className="text-center text-xl font-bold ">Courses You have Puchesed.</h2>
                                        {
                                            carts.map(cart => {
                                                return <div className="overflow-x-auto ">
                                                    <table className="table">
                                                        {/* head */}

                                                        <tbody>
                                                            {/* row 1 */}
                                                            <tr>
                                                                <th>

                                                                </th>
                                                                <td>
                                                                    <div className="flex items-center gap-3">
                                                                        <div className="avatar">
                                                                            <div className="mask mask-squircle w-12 h-12">
                                                                                <img src={cart?.image
                                                                                } alt="" />
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    {cart.courseName}

                                                                </td>
                                                                <td>
                                                                </td>
                                                                <th className="ml-2 cursor-pointer font-bold text-lg">
                                                                    <td><FaArrowRightLong />
                                                                    </td>
                                                                </th>
                                                            </tr>
                                                        </tbody>


                                                    </table>
                                                </div>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="hidden lg:inline ">

                        {
                            !user ? <div className="">
                                <button className="mx-3 ">  <Link className="flex justify-center items-center" to="/login">
                                    <FaRegUser className=" pr-1 " />Login
                                </Link>
                                </button>
                                <button className="mx-3 btn btn-success text-white">  <Link className="flex" to="/register">
                                    Register
                                </Link>
                                </button>

                            </div>
                                :
                                <div className="dropdown   dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle  online avatar ring  ring-offset-2">
                                        <div className="w-10 rounded-full">
                                            <img alt="user" src="https://www.darveys.com/blog/wp-content/uploads/2022/06/featured-image.jpg" />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-1 shadow menu menu-sm dropdown-content text-slate-600 bg-base-200 rounded-box w-52">
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

                        }
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;