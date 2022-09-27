import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';

const UserMenu = () => {
    const dispatch = useDispatch();
    const { name } = useSelector(getUser);

    const onLogout =()=>dispatch(logout())

    return (
        <div className="user-info">
            <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png" alt="User avatar" className="user-ava"/>
            <div className='user-block'>
            <span className='user-name'>{ name }</span>
            <button
                variant="outline-danger"
                type="button"
                onClick={onLogout}
                className="logout-btn"
            >
            Logout
            </button>
        </div>
    </div>
    );
};

export default UserMenu;