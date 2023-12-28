
import { useEffect, useState } from "react";

const useCourses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => {
                return setCourses(data)
            })
    }, [])

    console.log(courses);
    return { courses }
};

export default useCourses;