import { Outlet } from "react-router-dom";
import NavigationBar from "../Pages/Navbar/NavigationBar";

const Main = () => {
    return (
        <div className="w-full ">
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;