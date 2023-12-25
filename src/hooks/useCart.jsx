import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";



const useCart = () => {
    const { user } = useContext(AuthContext)
    const { data: carts = [], refetch } = useQuery({
        queryKey: ['carts', user?.email], queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/carts/${user?.email}`)
            return res.data
        }
    })

    // const [carts, setCarts] = useState([])
    // useEffect(() => {
    // axios.get("http://localhost:5000/carts")
    //     .then(res => {
    //         setCarts(res.data)
    //     })
    // }, [])

    return { carts, refetch }
    // return { carts }
};

export default useCart;