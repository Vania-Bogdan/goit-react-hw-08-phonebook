import { isAuth } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
const useAuth = () => {
    const result = useSelector(isAuth);
    return result;
};
export default useAuth;