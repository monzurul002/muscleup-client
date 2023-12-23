import { Outlet } from "react-router-dom";
import NavigationBar from "../Pages/Navbar/NavigationBar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Loading from "../Pages/Loading/Loading";
import { AuthContext } from "../Providers/AuthProviders";
import { useContext } from "react";

const Main = () => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="w-full ">
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <ToastContainer />

        </div>
    );
};

export default Main;