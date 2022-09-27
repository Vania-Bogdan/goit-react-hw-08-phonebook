import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import useAuth from 'shared/hooks/useAuth';

const Layout = () => {
    const isLogin = useAuth();
    return (
    <>
        <div>
            <header className='head'>
                <nav className='nav'>
                    <NavLink to="/"
                        className={({ isActive }) => isActive ? "head-link-a" : "head-link"}>
                        Phonebook
                    </NavLink>
                    {isLogin && (<NavLink to="/contacts"
                        className={({ isActive }) => isActive ? "head-link-a" : "head-link"}>
                        Contacts
                    </NavLink>)}
                </nav>
                <div>
                    {isLogin ? <UserMenu /> : <AuthNav />}
                </div>
            </header>
            <Outlet />
        </div>
    </>
    );
};

export default Layout;