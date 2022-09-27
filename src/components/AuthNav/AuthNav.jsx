import { NavLink } from "react-router-dom";
// import styled from 'styled-components';

const AuthNav = () => {
    return (
        <ul className="nav2">
            <NavLink to="/register"
                className={({ isActive }) => isActive ? "head-link-a" : "head-link"}>
                Register
            </NavLink>
            <NavLink to="/login"
                className={({ isActive }) => isActive ? "head-link-a" : "head-link"}>
                Login
            </NavLink>
        </ul>
    )
}

export default AuthNav;