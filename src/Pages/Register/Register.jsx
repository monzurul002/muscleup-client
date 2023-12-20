import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import HeadShake from 'react-reveal/HeadShake';
import registerImg from "../../assets/register.jpg"
import SocialLogin from "../SocialLogin/SocialLogin";
const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const { createUser, userProfileUpdate } = useContext(AuthContext);
    const navigate = useNavigate()
    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            return setError("Password doesn't match.")
        }
        setError(" ")
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                if (user) {
                    userProfileUpdate(data.name)
                        .then(result => {
                            navigate("/")
                            return Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `Welcome ${user?.displayName}`,
                                showConfirmButton: false,
                                timer: 1500
                            });

                        })


                }
            })
            .catch(error => {
                const message = error.message;
                console.log(message);
            })



    }
    return (
        <div className="bg-slate-50">
            <h1 className="text-3xl md:text-6xl pt-28 text-center   font-bold">Register now!</h1>
            <div id="allBtn" className="hero absolutept-16">
                <div className="hero-content  w-full  flex-col lg:flex-row-reverse">
                    <HeadShake>
                        <div className="text-center w-full md:w-1/2 lg:text-left">
                            <img className=" w-2/3 md:w-full mx-auto" src={registerImg}></img>
                        </div>
                    </HeadShake>
                    <div className="w-full md:w-1/2  mx-auto ">
                        <div className="card shrink-0  w-full md:w-2/3 mx-auto shadow-2xl ">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body  rounded-lg bg-white ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />

                                </div>
                                {errors.name?.type === "required" && (
                                    <p className="text-red-600" role="alert">Name is required</p>
                                )}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />

                                </div>
                                {errors.email?.type === "required" && (
                                    <p className="text-red-600" role="alert">Email is required</p>
                                )}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" {...register("password", { required: true, pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/ })} className="input input-bordered" />
                                </div>
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600" role="alert">password is required</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600" role="alert">password at least 6 charecter, at least one uppercase , 1 number , 1 speacial charecter</p>
                                )}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password"  {...register("confirmPassword")} placeholder="Confirm password" className="input input-bordered" />
                                    {
                                        error && <p className="text-red-500">{error}</p>
                                    }
                                    <div className="flex justify-between">
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                        <label className="label">
                                            Already have an account?
                                            <Link to='/login' className="label-text-alt link link-hover text-primary font-bold">Login</Link>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;