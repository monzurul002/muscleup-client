import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../layout/Dashboard.jsx";
import MySelectedClass from "../Pages/MySelectedClass/MySelectedClass.jsx";
import Payment from "../Pages/Payment/Payment.jsx";
import AddClass from "../Pages/AddClass/AddClass.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import MyClass from "../Pages/Instructor/MyClass.jsx";
import ManageClass from "../Pages/AdminDashboard/ManageClass.jsx";
import ManageUsers from "../Pages/AdminDashboard/ManageUsers.jsx";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard.jsx";
import InstructorDetails from "../Pages/Instructor/InstructorDetails.jsx";
import ClassDetails from "../Pages/ClassDetails/ClassDetails.jsx";
import MyProfile from "../Pages/MyProfile/MyProfile.jsx";
import StudentDashboard from "../Pages/StudentDashboard/StudentDashboard.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/instructor",
                element: <Instructor></Instructor>
            },
            {
                path: "/courses",
                element: <Classes></Classes>
            },
            {
                path: "/classes/:id",
                element: <ClassDetails></ClassDetails>
            },
            {
                path: "/instructor/:id",
                element: <InstructorDetails></InstructorDetails>
            },
        ]
    },
    {
        path: "dashboard",

        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "courses",
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: "checkout",
                element: <Payment></Payment>
            },
            {
                path: "myclass",
                element: <MyClass></MyClass>
            },
            {
                path: "manageclass",
                element: <ManageClass></ManageClass>
            },
            {
                path: "manageusers",
                element: <ManageUsers></ManageUsers>
            },
            {
                path: "addclass",
                element: <AddClass></AddClass>
            },
            {
                path: "admindashboard",
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: "studentdashboard",
                element: <StudentDashboard></StudentDashboard>
            },

            {
                path: "myprofile",
                element: <MyProfile></MyProfile>
            }
        ]

    }
])
export default router