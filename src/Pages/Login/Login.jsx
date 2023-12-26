import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GrFormViewHide } from "react-icons/gr";
import { BiSolidHide } from "react-icons/bi";

import loginIllustrator from "../../assets/loginill.png"

const Login = () => {
    const { signInWithPassword, } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [hide, setHide] = useState(false);
    const location = useLocation()
    const onSubmit = (data) => {

        signInWithPassword(data.email, data.password)
            .then(result => {
                console.log(result.user.email);
                // fetch("https://muscleup-server.vercel.app/users", {
                //     method: "POST",
                //     headers: {
                //         "content-type": "application/json"
                //     },
                //     body: JSON.stringify(result.user.email)
                // }).then(res => res.json())
                //     .then(data => {
                //         console.log(data);
                //     })


                navigate(location.state?.from?.pathname || "/")
            })
    }



    return (
        <div className="bg-slate-100 pt-20 w-full h-100">
            <h1 className="text-5xl text-center font-bold">Login now!</h1>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center mt-[-100px] w-full lg:text-left">
                        <img className="w-full" src={loginIllustrator} alt="" />
                    </div>
                    <div className="card shrink-0 w-1/2 mt-[-100px]  max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            </div>
                            {errors.email?.type === "required" && (
                                <p className="text-red-600" role="alert">Email is required</p>
                            )}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="input-bordered input flex justify-center items-center">
                                    <input type={!hide ? "password" : "text"} {...register("password", { required: true })} placeholder="password" className=" w-full" />
                                    {
                                        hide ? <BiSolidHide onClick={() => setHide(!hide)} className="text-xl" /> :
                                            <GrFormViewHide onClick={() => setHide(!hide)} className="text-xl" />
                                    }
                                </div>


                                {errors.password?.type === "required" && (
                                    <p className="text-red-600" role="alert">Password can not be empty.</p>
                                )}
                                <div className="flex justify-between">
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <label className="label">
                                        Are you new here?
                                        <Link to='/register' className="label-text-alt link link-hover text-primary font-bold">Register</Link>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;