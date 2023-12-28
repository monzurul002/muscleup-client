import { Link } from "react-router-dom";

const SingleInstructor = ({ instructor }) => {
    return (

        <div key={instructor._id} className="grid grid-cols-1 py-2 md:grid-cols-3  w-full  md:w-10/12 mx-auto">
            <div className="card w-72 md:w-80 h-80 my-4 px-2  hover:bg-slate-200 bg-slate-100  shadow-xl">

                <figure className="px-5 pt-5 bg-base-200 " >
                    <img src={instructor.image} alt="Shoes" className="rounded-full w-60 pt-4 h-44" />
                </figure>

                <div className="py-3 items-center text-center">
                    <h2 className=" text-xl font-bold">{instructor?.instructorName}</h2>
                    <p>{instructor.description.slice(0, 90)}</p>
                    <p className="font-extrabold py-2">{instructor.designation
                    }</p>
                    <Link className="btn btn-sm btn-success text-white" to={`/instructor/${instructor._id}`} >Details </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleInstructor;