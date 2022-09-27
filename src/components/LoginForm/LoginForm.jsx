import useForm from "shared/hooks/useForm";
import styled from 'styled-components';

const initialState = {
    email: '',
    password: '',
};

const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({
        initialState,
        onSubmit,
    });

    const { email, password } = state;

    return (
    <form action="" onSubmit={handleSubmit}>
        <div>
        <Label htmlFor="">Email:</Label>
        <Input
            value={email}
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Введите email"
        />
        </div>
        <div>
        <Label htmlFor="">Пароль:</Label>
        <Input
            value={password}
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Введите пароль"
        />
        </div>
        <div>
        <Btn type="submit" className="auth-btn">Вход</Btn>
        </div>
    </form>
    );
};

export default LoginForm;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

const Input = styled.input`
  border-radius: 5px;
  height: 30px;
  margin-bottom: 10px;
  margin-top: 5px;
  width: 250px;
`;

const Btn = styled.button`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-weight: 400;
  padding: 12px 12px;
`;