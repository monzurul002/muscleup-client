import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaRegUser } from "react-icons/fa6";

const NavigationBar = () => {

    const navItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Instructors</Link></li>
        <li><Link to="/">Classes</Link></li>
        <li><Link to="/">Dashboard </Link></li>



    </>
    return (
        // <nav className="w-11/12 z-30 fixed bg-opacity-75 top-0 max-w-screen-lg text-white bg-black mx-auto">
        <nav className=" z-30 bg-opacity-10 bg-black w-full px-4 text-white fixed ">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navItem
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

                    <button className="mx-6">  <Link className="flex" to="/login">
                        <FaRegUser className="mt-1 pr-1 " />Login
                    </Link>
                    </button>

                    <button className="mx-6">  <Link className="flex" to="/register">
                        <FaRegUser className="mt-1 pr-1 " />Register
                    </Link>
                    </button>
                    <div className="avatar online">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;