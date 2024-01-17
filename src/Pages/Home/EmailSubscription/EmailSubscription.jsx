import { useState } from "react";
import Swal from "sweetalert2";

const EmailSubscription = () => {
    const [email, setEmail] = useState("")
    const handleEmailSubscription = () => {
        if (!email) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Input Email First",
                width: "24em",
            })
        }

        return Swal.fire({
            icon: "success",
            title: "Done",
            text: "You have been subscribed",
            width: "24em",
        })
    }
    console.log(email);

    return (
        <div className="w-full  bg-slate-200 p-5 ">
            <div className=" mx-auto w-full md:w-1/2">
                <img className="w-1/4 mx-auto" src="https://themes.pixelwars.org/efor/demo-06/wp-content/uploads/sites/9/2020/06/taxi-4-768x768.png" alt="" />
                <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold">Get tips every <span className="text-cyan-500">Monday morning.</span> </h3>
                    <input type="email" onBlur={(e) => setEmail(e.target.value)} placeholder="Write your email" className="input input-bordered input-info  w-3/4 mt-6 mb-3" required />
                    <button onClick={handleEmailSubscription} className="btn bg-green-600 text-white px-10">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default EmailSubscription;