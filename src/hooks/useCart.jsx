import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";



const useCart = () => {

    const { data: carts = [], refetch } = useQuery({
        queryKey: ['carts'], queryFn: async () => {
            const res = await axios.get("http://localhost:5000/carts")
            return res.data
        }
    })
    console.log(carts);
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