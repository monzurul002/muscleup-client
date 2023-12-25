import axios from 'axios';
import React, { useContext } from 'react';
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from '../../Providers/AuthProviders';
import Loading from '../Loading/Loading';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GrUpdate } from "react-icons/gr";

const MyClass = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }

    const { data: classes = [], refetch } = useQuery({
        queryKey: ["classes", user?.email],
        queryFn: async () => {
            try {

                const res = await axios.get(`http://localhost:5000/classes?email=${user?.email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                return res.data;
            } catch (error) {

                throw error;
            }
        }
    })

    return (
        <div className='p-8'>
            <h4>My class</h4>
            <div className='my-3'>
                {
                    classes.map((classItem) => (
                        <div key={classItem._id} className="flex flex-col lg:flex-row  w-full my-4 bg-base-200">
                            <div className="hero-content flex-col w-1/2 lg:flex-row">
                                <div className="w-full md:w-1/2"><img src={classItem.image} className="w-full md:w-40 h-40 rounded-lg shadow-2xl" /></div>
                                <div>
                                    <h1 className="text-2xl font-bold">{classItem.className}</h1>
                                    <p className="py-3">{classItem.instructorName}</p>
                                    <p>Available Seat: {classItem.
                                        availableSeat}</p>
                                    <button className="btn mt-3 btn-primary"><GrUpdate className='text-xl font-bold ' />
                                    </button>
                                </div>
                            </div>
                            <div className='py-8'>
                                <h2 className='text-2xl'>Total Enrolled Students:0</h2>
                                <p className='py-2'>Review:4.5</p>
                                <p className=''>Status: <span className={classItem.status == "pending" ? "text-rose-600" : "text-green-600"}>{classItem?.status}</span> </p>

                                {/* <p>{`Admin feedback: ${classItem?.feedback ? classItem.feedback : 'No feedback'}`}</p> */}
                                <p>Admin feedback:
                                    <span className={` ${classItem?.feedback ? 'text-cyan-800 font-bold' : 'text-red-600'}`}>
                                        {classItem?.feedback ? classItem.feedback : 'No feedback'}
                                    </span>
                                </p>

                                <button className="btn mt-2  btn-error text-white"><RiDeleteBin6Line className='text-xl' />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default MyClass;