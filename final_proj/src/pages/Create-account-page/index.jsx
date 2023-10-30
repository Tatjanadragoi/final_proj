import React from "react";
import { LoginHereButton, RegisteredMembrer, Wrapper } from "./index.style";
import { LoginWrapper, ButtonWrapper } from "../login-page/index.style";
import { ItemInput } from "../../components/cost-form/index.style";
import { AddButton } from "../../components/add-item-button/index.style";
import { useNavigate } from "react-router-dom";
import { InputWrapper } from "./index.style";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/authSlice";

export const CreateAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isRegister, setIsregister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const changeHandler = ({target}) => {
    const setters = {
      email: setEmail,
      password: setPassword,
      confirmPassword: () => {}



    }
    setters[target.name](target.value)


    }

const handleRegisterAccountClick = () => {

  dispatch(registerUser({email, password}));



}
   



  const handlerLoginHereClick = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <LoginWrapper>
        <InputWrapper>
          <ItemInput placeholder="Username" value={email} name="email" onChange={changeHandler} />
          <ItemInput type="password" placeholder="Password" value={password} name="password" onChange={changeHandler} />
          <ItemInput type="password" placeholder="Confirm password" value={password} name="confirmPassword" onChange={changeHandler} />
        </InputWrapper>

        <ButtonWrapper>
          <AddButton onClick={handleRegisterAccountClick}>Register account</AddButton>
        </ButtonWrapper>
        <RegisteredMembrer>
          Already a member?
          <LoginHereButton onClick={handlerLoginHereClick}>
            Login here
          </LoginHereButton>
        </RegisteredMembrer>
      </LoginWrapper>
    </Wrapper>
  );
};
