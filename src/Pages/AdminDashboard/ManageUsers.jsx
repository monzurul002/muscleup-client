import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ManageUsers = () => {
    const { data: users = [], loading, refetch } = useQuery({
        queryKey: ["users"], queryFn: async () => {
            const res = await axios.get("http://localhost:5000/users");
            return res.data;
        }
    })

    return (
        <div>
            <h2>Mange users{users.length}</h2>
        </div>
    );
};

export default ManageUsers;