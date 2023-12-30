import { useContext, useState } from "react";
import cover from "../../assets/profilecover.png"
import { AuthContext } from "../../Providers/AuthProviders";
import { FaRegEdit } from "react-icons/fa";
import ProfileEditForm from "../ProfileEditForm/ProfileEditForm";
import useAdmin from "../../hooks/useAdmin";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IoCloseCircleSharp } from "react-icons/io5";

const MyProfile = () => {
    const { user } = useContext(AuthContext)
    const device = window.navigator.appVersion.split(";")[0].split("(")[1].split("NT");
    const deviceName = device[0]
    const version = device[1].split(".")[0]
    const [isEdit, setIsEdit] = useState(false)
    const { isAdmin } = useAdmin();
    const { data: userInfo = {}, refetch } = useQuery({
        queryKey: ["users", user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/users/${user.email}`)
            return res.data
        }
    })




    return (
        <div className="w-full  pb-10 bg-base-200">
            <div className=" bg-white rounded-lg pt-2 ">
                <div style={{ backgroundImage: `url(${cover})`, backgroundSize: "cover", }} className="h-32 md:h-44 my-2 mx-4 rounded-lg ">
                    <div className="avatar">
                        <div className="w-28 md:w-32 ring ring-primary rounded-full mt-16 md:mt-20 ml-4 md:ml-12">
                            <img src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-8 mt-5">
                <div className="col-span-5 md:col-span-2">
                    <div className="bg-white rounded-xl ">
                        <div className="">
                            <div className="pl-5 py-5 mt-8 ">
                                <h2 className="text-cyan-700 text-xl font-bold">{
                                    userInfo?.name ? userInfo?.name :
                                        user?.displayName}</h2>
                                <p className="font-semibold text-slate-500">

                                    Logged In as:   <span className="text-xl font-bold text-cyan-600"> {
                                        isAdmin?.admin ? "Admin" : isAdmin?.instructor ? "Instructor" : "Student"
                                    }
                                    </span>
                                </p>
                                <p>{user?.email}</p>
                                <p>Join Date:25 jan 2023</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-span-5 md:col-span-6 bg-white px-5 mt-8 mx-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold  text-cyan-700 my-6">My Profile</h2>
                        <div>
                            {!isEdit ? <FaRegEdit onClick={() => setIsEdit(!isEdit)} className="text-2xl text-cyan-500 cursor-pointer" /> :
                                <IoCloseCircleSharp onClick={() => setIsEdit(!isEdit)} className="text-red-500 text-3xl cursor-pointer" />}
                        </div>


                    </div>
                    {
                        !isEdit ? <div>
                            <div className="flex justify-between ">
                                <div className="w-1/2 " >
                                    <p className="font-bold  text-slate-500">Full Name</p>
                                    <h4 className="text-xl text-slate-600 font-bold"> {userInfo?.name ? userInfo?.name : user?.displayName} </h4>
                                </div>
                                <div className="w-1/2 " >
                                    <p className="font-bold  text-slate-500">Email</p>
                                    <h4 className=" text-slate-600 font-bold">{user?.email}</h4>
                                </div>

                            </div>
                            <div className="w-1/2 py-4 " >
                                <p className="font-bold  text-slate-500">Mobile Number</p>
                                <h4 className=" text-slate-600 font-bold">{userInfo.mobile}</h4>
                            </div>
                            <div className="py-5">
                                <h2 className="text-xl font-bold  text-indigo-500">Device Activity</h2>
                                <p className="text-slate-500 font-bold">Now logged In : {deviceName + version}</p>
                            </div>
                        </div> : <ProfileEditForm setIsEdit={setIsEdit} refetch={refetch} ></ProfileEditForm>

                    }

                </div>
            </div>

        </div>
    );
};

export default MyProfile;