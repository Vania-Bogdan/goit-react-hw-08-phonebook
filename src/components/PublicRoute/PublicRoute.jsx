import { Navigate } from "react-router-dom";
import useAuth from "shared/hooks/useAuth";

const PublicRoute = ({ redirect, restricted = false, children }) => {
    const isLogin = useAuth();
    return isLogin && restricted ? <Navigate to={redirect} /> : children;
};

export default PublicRoute;