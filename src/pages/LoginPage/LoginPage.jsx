import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import LoginForm from "../../components/LoginForm/LoginForm";
import { getAuthError } from 'redux/auth/auth-selectors';


const LoginPage = () => {
    const dispatch = useDispatch();
    const {status, message} = useSelector(getAuthError);

    const onLogin = (data) => {
        dispatch(login(data));
    };

    return (
        <Form>
            <h2>Login Page</h2>
            <LoginForm onSubmit={onLogin} />   
            {status && <p style={{color: "red"}}>{message}</p>}
        </Form>
    );
};

export default LoginPage;

const Form = styled.div`
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid rgb(231, 142, 0);
    border-radius: 30px;
    padding: 15px;
    margin-top: 20px;
`;