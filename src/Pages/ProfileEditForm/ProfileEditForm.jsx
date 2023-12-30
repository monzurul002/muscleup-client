import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import Swal from "sweetalert2";




const ProfileEditForm = ({ setIsEdit, refetch }) => {
    const { user, resetPassword } = useContext(AuthContext);
    const [error, setError] = useState("")
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const name = data.name;
        const mobile = data.mobile;
        const city = data.city;

        const updateInfo = {
            name, mobile, city
        }
        // fetch(`http://localhost:5000/users/email/${user.email}`, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(updateInfo)
        // }).then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //})

        try {
            axios.put(`http://localhost:5000/users/email/${user.email}`, updateInfo)
                .then(res => {
                    if (res.data.modifiedCount) {
                        setIsEdit(false)
                        refetch()
                        Swal.fire({
                            title: "Good job!",
                            text: "Profile has been updated!",
                            icon: "success"
                        });
                    }
                })

        }
        catch (error) {
            console.log(error);
        }


        //password reset functon  and it works , implemnet letter.
        // const password = data.password;
        // const confirmPassword = data.confirmPassword;
        // setError("")
        // if (password !== confirmPassword) {
        //     return setError("Password doesn't match.")
        // }
        // resetPassword(user.email)
        //     .then(() => {
        //         toast("Password chage mail hase been sent to your mail.")
        //     })
        //     .then(error => {
        //         setError(error?.message)
        //     })

    }

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className=" rounded-lg bg-white ">
                <div className="flex w-full  flew-col md:flex-row justify-between gap-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="name" className="input w-full input-bordered" />
                        {errors.name?.type === "required" && (
                            <p className="text-red-600" role="alert">Name is required</p>
                        )}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" disabled defaultValue={user?.email} className="input  w-full input-bordered" />

                    </div>

                </div>
                {/* personal info */}
                <div className="flex w-full  flew-col md:flex-row justify-between gap-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Mobile</span>
                        </label>
                        <input type="number" {...register("mobile", { required: true, minLength: 11, maxLength: 11, pattern: /^(013|014|015|016|017|018|019)/ })} placeholder="Mobile number" className="input w-full input-bordered" />
                        {errors.mobile?.type === "required" && (
                            <p className="text-red-600" role="alert">Mobile number is required</p>
                        )}
                        {errors.mobile?.type === "pattern" && (
                            <p className="text-red-600" role="alert">Mobile number is not valid, must be 013/014/015/016/017/018/019</p>
                        )}
                        {errors.mobile?.type === "minLength" && (
                            <p className="text-red-600" role="alert">Mobile number must be 11 charecter.</p>
                        )}
                        {errors.mobile?.type === "maxLength" && (
                            <p className="text-red-600" role="alert">Mobile number can't be more than 11 charecter.</p>
                        )}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">City</span>
                        </label>
                        <input type="text" {...register("city", { required: true })} placeholder="text" className="input  w-full input-bordered" />
                        {errors.city?.type === "required" && (
                            <p className="text-red-600" role="alert">City is required</p>
                        )}
                    </div>

                </div>
                {/* password section */}
                {/* <div className="flex flex-col md:flex-row justify-between w-full gap-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"> New Password</span>
                        </label>
                        <input type="password" placeholder="password" {...register("password", { required: true, pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/ })} className="input w-full input-bordered" />
                        {errors.password?.type === "required" && (
                            <p className="text-red-600" role="alert">password is required</p>

                        )}

                        {errors.password?.type === "pattern" && (
                            <p className="text-red-600" role="alert">password at least 6 charecter, at least one uppercase , 1 number , 1 speacial charecter</p>
                        )}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Confirm New Password</span>
                        </label>
                        <input type="password"  {...register("confirmPassword")} placeholder="Confirm password" className="input input-bordered" />


                    </div>

                </div> */}
                {
                    <p className="text-red-500">{error}</p>
                }
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ProfileEditForm;