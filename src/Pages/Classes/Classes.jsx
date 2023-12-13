import useCourses from "../../hooks/useCourses";
import { PiOfficeChairThin } from "react-icons/pi";
import { BsCart } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const Classes = () => {
    const { courses } = useCourses();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleAddToCart = () => {
        if (!user) {
            navigate("/login")
            return toast.error("Login first.")

        }
    }

    return (
        <div className="grid grid-cols-1 pt-16 gap-3 md:grid-cols-3 mx-5">
            {
                courses.map(course => {
                    return <div key={course.id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://rainbowit.net/html/histudy/assets/images/course/course-online-05.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body ps-12">
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
                                <button onClick={handleAddToCart} className=" hover:border-b-2 border-indigo-500 hover:text-indigo-800"> <BsCart className="inline mr-2" />
                                    Add to Cart</button>
                            </div>

                        </div>

                    </div>
                })
            }
        </div>
    );
};

export default Classes;