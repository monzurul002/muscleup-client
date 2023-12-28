import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { toast } from "react-toastify";
import { PiOfficeChairThin } from "react-icons/pi";
import { BsCart } from "react-icons/bs";
import { MdOutlineDescription, MdOutlineMail } from "react-icons/md";
import axios from "axios";
import useAdmin from "../../../hooks/useAdmin";

const Class = ({ course }) => {
    const { user } = useContext(AuthContext);
    const { isAdmin } = useAdmin()
    const navigate = useNavigate()
    course.email = user?.email;
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
    const seeMoreInfo = (id) => {

    }
    return (
        <div key={course.id} className={`card w-96 ${course.availableSeat == 0 ? "bg-red-500 text-white" : "bg-base-100"}  shadow-xl`}>
            <figure className="px-10 pt-10">
                <p className="absolute top-12 text-white rounded-md px-1 bg-secondary right-12">Offline</p>
                <img style={{ width: "300px", height: "200px" }} src={course?.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className={`card-body ps-12 `}>
                <h2 className="card-title">{course?.courseName}</h2>
                <p><MdOutlineMail className="inline" />
                    danelHandy@gmail.com</p>
                <p className=""><PiOfficeChairThin className="inline mr-1" />
                    Available Seat:{course?.availableSeat}</p>
                <div className="avatar flex justify-center items-center gap-2">
                    <div className="w-10 my-2 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                    <p className="text-slate-600">By {course.instructorName}</p>
                    <p className="text-2xl font-bold text-slate-500">${course.price}</p>
                </div>
                <div className="flex justify-evenly px-5">
                    <Link to={`/classes/${course?._id}`}  ><button onClick={() => seeMoreInfo(course?._id)} className="btn btn-sm bg-slate-300 text-slate-700"> <MdOutlineDescription /> More Info</button></Link>
                    <button onClick={handleAddToCart} disabled={course.availableSeat === 0 || isAdmin} className=" btn hover:border-b-2 border-indigo-500 btn-sm hover:text-indigo-800"> <BsCart className="inline " />
                        Add to Cart</button>
                </div>

            </div>

        </div>
    );
};

export default Class;