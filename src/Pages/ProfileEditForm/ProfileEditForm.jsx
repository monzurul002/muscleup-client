import { useForm } from "react-hook-form"

const ProfileEditForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

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
                        <input type="email" {...register("email", { required: true })} placeholder="email" className="input  w-full input-bordered" />
                        {errors.email?.type === "required" && (
                            <p className="text-red-600" role="alert">Email is required</p>
                        )}
                    </div>

                </div>
                {/* personal info */}
                <div className="flex w-full  flew-col md:flex-row justify-between gap-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Mobile</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="name" className="input w-full input-bordered" />
                        {errors.name?.type === "required" && (
                            <p className="text-red-600" role="alert">Name is required</p>
                        )}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">City</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="email" className="input  w-full input-bordered" />
                        {errors.email?.type === "required" && (
                            <p className="text-red-600" role="alert">Email is required</p>
                        )}
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between w-full gap-2">
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
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
    );
};

export default ProfileEditForm;