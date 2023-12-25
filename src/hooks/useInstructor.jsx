
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const useInstructor = () => {
    const { user } = useContext(AuthContext)
    const [isInstructor, setIsInstructor] = useState(null)
    const [instructorLoading, setInstructorLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/users/type/${user?.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setInstructorLoading(false)
                setIsInstructor(data);
            })
    }, [])

    return { isInstructor, instructorLoading }
};

export default useInstructor;