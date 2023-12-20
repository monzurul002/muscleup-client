import useCourses from "../../hooks/useCourses";
import Class from "./Class/Class";


const Classes = () => {
    const { courses } = useCourses();


    return (
        <div className="grid grid-cols-1 pt-16 gap-3 md:grid-cols-3 mx-5">
            {
                courses.map(course => <Class
                    key={course.id} course={course}></Class>)
            }
        </div>
    );
};

export default Classes;