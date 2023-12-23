import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Pages/Loading/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }
    return children
};

export default PrivateRoute;
