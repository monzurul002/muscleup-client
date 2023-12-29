import axios from "axios";
import cover from "../../assets/instructorCover.png"
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SingleInstructor from "./SingleInstructor";
const Instructor = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/instructors")
            .then(res => {
                return setInstructors(res.data)
            })
    }, [])


    return (
        <div className="text-center bg-base-200">
            <img className="w-full h-80" src={cover} alt="" />
            <button className="text-center btn text-white hover:bg-slate-900 bg-green-700 mt-5 py-2">All Instructor</button>
            <div className="grid gird-cols-1 md:grid-cols-3 w-11/12 mx-auto cursor-pointer">
                {
                    instructors.map(instructor => <SingleInstructor instructor={instructor}></SingleInstructor>)
                }
            </div>
        </div>

    );
};

export default Instructor;
// onClick={() => instructorDetails(instructor._id)}