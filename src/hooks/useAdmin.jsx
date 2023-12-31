import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Loading from "../Pages/Loading/Loading";

const useAdmin = () => {
    const { user } = useContext(AuthContext)
    const [adminLoading, setAdminLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(null)
    console.log(user?.email);
    console.log("object");
    useEffect(() => {
        fetch(`http://localhost:5000/users/type/${user?.email}`, {
            headers: {
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAdminLoading(false)
                return setIsAdmin(data);
            })
    }, [])

    return { isAdmin, adminLoading }
};

export default useAdmin;