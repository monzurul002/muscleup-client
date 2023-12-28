import { Outlet } from "react-router-dom";
import NavigationBar from "../Pages/Navbar/NavigationBar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Loading from "../Pages/Loading/Loading";
import { AuthContext } from "../Providers/AuthProviders";
import { useContext } from "react";
import Footer from "../Pages/Footer/Footer";

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
            <Footer></Footer>
        </div>
    );
};

export default Main;