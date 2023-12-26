import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useUsers = () => {
    const { data: users = [], loading, refetch } = useQuery({
        queryKey: ["users"], queryFn: async () => {
            const res = await axios.get("https://muscleup-server.vercel.app/users");
            return res.data;
        }
    })
    return { users, refetch }
};

export default useUsers;