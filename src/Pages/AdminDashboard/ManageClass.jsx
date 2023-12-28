import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

const ManageClass = () => {
    const { data: classes = [], refetch } = useQuery({
        queryKey: ["classes"], queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/classes`, {
                headers: {
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            return res.data;
        }
    })

    const sendFeedback = (e, id) => {
        e.preventDefault()
        const feedback = e.target.feedback.value;
        axios.put(`http://localhost:5000/classes/${id}`, { feedback })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    e.target.reset()
                    return Swal.fire({
                        title: "Feedback submitted.",
                        icon: "success"
                    });
                }
            })
    }
    const handleUpdateStatus = async (id, status) => {
        try {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success text-white",
                    cancelButton: "btn btn-danger bg-red-600 text-white"
                },
                buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: `Yes, make him ${status}`,
                cancelButtonText: "No, cancel!",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.put(`http://localhost:5000/classes/${id}`, { status })
                        .then(res => {
                            if (res.data.modifiedCount > 0) {
                                refetch()
                                return swalWithBootstrapButtons.fire({
                                    title: "Approved",
                                    text: "Has been updated to approve.",
                                    icon: "success"
                                });
                            }
                        })

                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire({
                        title: "Cancelled",
                        text: "Your imaginary file is safe :)",
                        icon: "error"
                    });
                }
            });


        } catch (error) {
            console.error("Error updating status:", error);
            throw error; // Propagate the error or handle it accordingly
        }
    }

    const deleteClass = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/classes/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            return Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });



    }

    return (
        <div className="bg-base-200 p-5">
            <div className="flex justify-between border-b-4 border-blue-400">
                <h2 className="text-xl font-bold text-cyan-600 ">Manage Class</h2> <h2 className="text-xl font-bold text-green-600 ">Total Class: {classes?.length}</h2>

            </div>
            <div className='my-3'>
                {
                    classes.map((classItem) => (
                        <div key={classItem._id} className="flex flex-col lg:flex-row  w-full my-4 bg-white rounded-lg  ">
                            <div className="hero-content flex-col w-1/2 lg:flex-row">
                                <div className="w-full md:w-1/2"><img src={classItem.image} className="w-full md:w-40 h-40 rounded-lg shadow-2xl" /></div>
                                <div className="text-slate-600">
                                    <h1 className="text-xl text-teal-600 font-bold">{classItem.className}</h1>
                                    <p className="">{classItem.instructorName}</p>
                                    <p className="">{classItem.instructorEmail}</p>
                                    <p className="">Price: $ {classItem.price}</p>
                                    <p>Available Seat: {classItem.
                                        availableSeat}</p>
                                    <button onClick={() => deleteClass(classItem?._id)} className="btn btn-xs mt-1 bg-red-600 text-white hover:bg-warning">Delete</button>

                                </div>
                            </div>
                            <div className='py-8'>


                                <p className=''>Status: <span className={classItem.status == "pending" || classItem.status == "denied" ? "text-rose-600" : "text-green-600"}>{classItem?.status}</span> </p>

                                <button onClick={() => handleUpdateStatus(classItem._id, "approved")} className="btn mt-2 bg-success btn-xs text-white hover:bg-sky-700" disabled={classItem.status === "approved" || classItem.status === "denied"} >Approve</button>
                                <button onClick={() => handleUpdateStatus(classItem._id, "denied")} disabled={classItem.status === "approved" || classItem.status === "denied"} className="btn mt-2 my-1 btn-xs   hover:bg-red-600 bg-yellow-400 hover:text-white text-black ">Deny</button>

                                <form onSubmit={(e) => sendFeedback(e, classItem._id)} >

                                    <textarea name="feedback" className="textarea textarea-bordered" placeholder="Write Your Feedback"></textarea> <br />
                                    <input className="btn btn-xs  btn-primary" type="submit" value="submit" />
                                </form>


                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ManageClass;


