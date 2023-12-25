import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { FcReading } from "react-icons/fc";
import { RiAdminFill } from "react-icons/ri";
import Swal from "sweetalert2";
import useUsers from "../../hooks/useUsers";

const ManageUsers = () => {
    const { users, refetch } = useUsers()
    const makeNewRole = async (id, role) => {

        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, make him/her ${role}!`
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`http://localhost:5000/users/${id}`, { role })
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            return Swal.fire({
                                title: "Good job!",
                                text: "You clicked the button!",
                                icon: "success"
                            });
                        }
                    })


            }
        });


    }



    return (
        <div className="p-10">
            <div className="flex justify-between border-b-4 border-blue-400">
                <h2 className="text-xl font-bold text-cyan-600 ">Mange user</h2> <h2 className="text-xl font-bold text-green-600 ">Total Users: {users?.length}</h2>

            </div>
            <div>
                <table className="table">
                    {/* head */}
                    <thead className="bg-slate-50">
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return <tr key={user._id} className="overflow-x-auto"> <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td> {user.email}</td>
                                    <th>
                                        <button onClick={() => makeNewRole(user._id, "instructor")} className={`rounded-lg p-3 ${user.role === "instructor" ? " bg-red-600" : "bg-slate-100"} hover:bg-blue-950 `} disabled={user.role === "instructor"}><FcReading className="text-2xl" /></button>
                                    </th>
                                    <th>
                                        <button onClick={() => makeNewRole(user._id, "admin")} className={` rounded-lg hover:bg-rose-600 hover:text-white p-3 ${user.role === "admin" && "bg-red-600"}`} disabled={user.role === "admin"}><RiAdminFill className="text-2xl text-success hover:text-white  " /></button>
                                    </th>
                                </tr>
                            })
                        }


                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default ManageUsers;