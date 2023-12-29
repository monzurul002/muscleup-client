import useCourses from "../../hooks/useCourses";
import Class from "./Class/Class";
import cover from "../../assets/personalBackground.png"

const Classes = () => {

    const { courses } = useCourses();

    return (<div className="bg-slate-50" >
        <div style={{ backgroundImage: `url(${cover})`, backgroundSize: "cover" }} className="py-20 text-center">
            <div className="border-b-8 border-r-4 p-2 rounded-lg shadow-xl  inline-block border-cyan-800">
                <h2 className="text-4xl pt-6 font-bold ">
                    Find a career that works for you
                </h2>

                <p> Whatever your background or interests are, Professional Certificates have you covered.</p>
            </div>
        </div>


        <div className="grid grid-cols-1 pt-5 gap-3 md:grid-cols-3 mx-5">
            {
                courses.map(course => <Class
                    key={course._id} course={course}></Class>)
            }
        </div>
    </div>

    );
};

export default Classes;