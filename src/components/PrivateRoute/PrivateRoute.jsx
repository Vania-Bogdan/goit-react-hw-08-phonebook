import { Navigate } from "react-router-dom";
import useAuth from "shared/hooks/useAuth";

const PrivateRoute = ({ redirect, children }) => {
    const isLogin = useAuth();
    return isLogin ? children : <Navigate to={redirect} />;
}
export default PrivateRoute;