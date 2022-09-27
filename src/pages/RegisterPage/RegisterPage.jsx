import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import RegistrForm from 'components/RegistrForm/RegistrForm';
import { getAuthError} from 'redux/auth/auth-selectors';


const RegisterPage = () => {
    const dispatch = useDispatch();
    const {status} = useSelector(getAuthError);

    const onRegister = (data) => {
        dispatch(signup(data));
    };

    return (
        <Form >
            <h2>Register Page</h2>
            <RegistrForm onSubmit={onRegister} />   
            {status && <p style={{color: "red"}}>Такой пользователь уже есть!</p>}
        </Form>
    );
};

export default RegisterPage;

const Form = styled.div`
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid rgb(231, 142, 0);
    border-radius: 30px;
    padding: 15px;
    margin-top: 20px;
    `;