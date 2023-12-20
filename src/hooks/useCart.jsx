import axios from "axios";
import { useEffect, useState } from "react";

const useCart = () => {

    const [carts, setCarts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/carts")
            .then(res => {
                setCarts(res.data)
            })
    }, [])

    return { carts }
};

export default useCart;