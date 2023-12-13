import { Outlet } from "react-router-dom";
import NavigationBar from "../Pages/Navbar/NavigationBar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const Main = () => {
    return (
        <div className="w-full ">
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <ToastContainer />

        </div>
    );
};

export default Main;