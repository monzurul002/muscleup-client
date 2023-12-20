import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { toast } from "react-toastify";
import { PiOfficeChairThin } from "react-icons/pi";
import { BsCart } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import axios from "axios";

const Class = ({ course }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleAddToCart = () => {

        if (!user) {
            navigate("/login")
            return toast.error("Login first.")
        }
        axios.post("http://localhost:5000/carts", course)
            .then(result => {
                if (result.data.insertedId) {
                    return toast.success("Item has been added to cart.")
                }
            })


    }
    return (
        <div key={course.id} className={`card w-96 ${course.availableSeat == 0 ? "bg-red-500 text-white" : "bg-base-100"}  shadow-xl`}>
            <figure className="px-10 pt-10">
                <img src="https://rainbowit.net/html/histudy/assets/images/course/course-online-05.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className={`card-body ps-12 `}>
                <h2 className="card-title">{course.courseName}</h2>
                <p><MdOutlineMail className="inline" />
                    danelHandy@gmail.com</p>
                <p className=""><PiOfficeChairThin className="inline mr-1" />
                    Available Seat:{course.availableSeat}</p>
                <div className="avatar flex justify-center items-center gap-2">
                    <div className="w-10 my-2 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                    <p className="text-slate-600">By {course.instructorName}</p>
                </div>
                <div className="flex justify-evenly px-5">
                    <p className="text-2xl font-bold text-slate-500">${course.price}</p>
                    <button onClick={handleAddToCart} disabled={course.availableSeat === 0} className=" btn hover:border-b-2 border-indigo-500 hover:text-indigo-800"> <BsCart className="inline mr-2" />
                        Add to Cart</button>
                </div>

            </div>

        </div>
    );
};

export default Class;