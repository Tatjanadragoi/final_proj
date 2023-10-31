import React from "react";
import { Wrapper, LoginWrapper, ButtonWrapper, InputButtonWrapper } from "./index.style";
import { Btn } from "../../components/menu-buttons/index.style";
import { useNavigate } from "react-router-dom";
import { ItemInput } from "../../components/cost-form/index.style";
import { useDispatch } from "react-redux";
import { loginWithGoogle, signInUser } from "../../redux/authSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getUser } from "../../redux/authSelectors";
import { useEffect, useState } from "react";


export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/main");
    }
  }, [user, navigate]);

  const handleLoginClick = () => {
    dispatch(signInUser({ email, password }));
    console.log({ email, password });
  };

  const handleRegisterAccountClick = () => {
    navigate("/CreateAccount");
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  const changeHandler = ({ target }) => {
    const setters = {
      email: setEmail,
      password: setPassword,
    };
    setters[target.name](target.value);
  };

  return (
    <Wrapper>
      <LoginWrapper>
        <InputButtonWrapper>
          <ItemInput
            placeholder="Username"
            name="email"
            value={email}
            onChange={changeHandler}
          />
          <ItemInput
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
        </InputButtonWrapper>

        <ButtonWrapper>
          <Btn onClick={handleLoginClick}>Login</Btn>
          <Btn onClick={handleGoogleLogin}>Sign in with Google</Btn>
          <Btn onClick={handleRegisterAccountClick}>Register new account</Btn>
        </ButtonWrapper>
      </LoginWrapper>
    </Wrapper>
  );
};
