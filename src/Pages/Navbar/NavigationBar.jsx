import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaRegUser } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { GiShoppingBag } from "react-icons/gi";
import useCart from "../../hooks/useCart";
const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const { carts } = useCart()
    const navItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructor">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/dashboard">Dashboard </Link></li>



    </>
    return (
        // <nav className="w-11/12 z-30 fixed bg-opacity-75 top-0 max-w-screen-lg text-white bg-black mx-auto">
        <nav className=" z-30 bg-opacity-10 bg-black w-full  px-4 text-white fixed ">
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
                                    <> <button onClick={logOut} className="mr-8 btn bg-red-600 text-white">Log Out</button>
                                        <div className="avatar online">
                                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div></>
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
                <div className="navbar-end">
                    <div className="flex justify-center items-center ">
                        <p><GiShoppingBag className="text-2xl font-bold" /> </p>
                        <span className="mt-[-12px] ms-[-5px] inline-block">{carts.length}</span>
                    </div>
                    <div className="hidden lg:inline ">

                        {
                            !user ? <div className="">
                                <button className="mx-3">  <Link className="flex" to="/login">
                                    <FaRegUser className="mt-1 pr-1 " />Login
                                </Link>
                                </button>
                                <button className="mx-3">  <Link className="flex" to="/register">
                                    <FaRegUser className="mt-1 pr-1 " />Register
                                </Link>
                                </button>
                            </div>
                                :
                                <div className="flex justify-center items-center"> <button onClick={logOut} className="mx-5 mb-2 btn bg-red-600 text-white">Log Out</button>

                                    <div className="avatar online my-3 ">
                                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img className="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>

                                </div>

                        }
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;