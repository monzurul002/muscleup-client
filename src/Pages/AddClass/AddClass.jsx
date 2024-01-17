import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const AddClass = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [image, setImage] = useState(null)
    let objectUrl
    if (image) {
        objectUrl = URL.createObjectURL(image)
    }
    const onSubmit = (data, e) => {
        const className = data.className;
        const instructorName = user.displayName;
        const instructorEmail = user.email;
        const availableSeat = data.availableSeat;
        const price = data.price

        const formData = new FormData()
        formData.append("image", image);
        formData.append("className", className);
        formData.append("instructorName", instructorName);
        formData.append("instructorEmail", instructorEmail);
        formData.append("availableSeat", availableSeat);
        formData.append("price", price);

        axios.post('http://localhost:5000/classes', formData)
            .then(res => {
                if (res.data.insertedId) {
                    e.target.reset()
                    setImage(null)
                    return Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Classes has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
    }


    return (
        <div className="p-12">
            <h1 className="text-3xl text-indigo-600 font-bold">Add Class</h1>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" >

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        {/* classname */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">What is class name?</span>

                            </div>
                            <input type="text"  {...register("className", { required: true })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                        {errors.className?.type === "required" && (
                            <p className="text-red-500" role="alert ">Class name is required</p>
                        )}
                        {/* instructor name */}

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Instructor Name</span>
                            </div>
                            <input type="text" readOnly value={user.displayName} className="input input-bordered w-full max-w-xs" />
                        </label>

                        {/* instructor email */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Instructor Email</span>
                            </div>
                            <input type="text" readOnly value={user.email} className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div>
                        {/* available seat */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Available seat</span>
                            </div>
                            <input type="number" {...register("availableSeat", { required: true })} min={0} placeholder="example:50" className="input input-bordered w-full max-w-xs" />
                        </label>
                        {errors.availableSeat?.type === "required" && (
                            <p className="text-red-500" role="alert ">Available Seat is required</p>
                        )}
                        {/* price */}
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input type="number" min={0} {...register("price", { required: true })} placeholder="example: $50" className="input input-bordered w-full max-w-xs" />
                        </label>
                        {errors.price?.type === "required" && (
                            <p className="text-red-500" role="alert ">Price is required</p>
                        )}


                        {
                            image && <img className="rounded-full w-1/3 " src={objectUrl} alt="" />
                        }
                        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="file-input file-input-bordered file-input-success mt-5 w-full max-w-xs" /> <br />

                    </div>

                </div>
                <input className="btn mt-10 w-10/12 inline-block btn-primary" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddClass;