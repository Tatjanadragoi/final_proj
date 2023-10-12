import React from "react";
import { Wrapper, LoginWrapper, LoginBtn } from "./index.style";
import { ButtonWrapper } from "./index.style";
import { Btn } from "../../components/menu-buttons/index.style";
import { useNavigate } from "react-router-dom";
import { ItemInput } from "../../components/cost-form/index.style";
import { InputButtonWrapper } from "./index.style";

export const LoginPage = () => {
  const navigate = useNavigate();

  const LoginClick = () => {
    navigate("/main");
  };

  const RegisterAccountClick = () => {
    navigate("/CreateAccount");
  };

  return (
    <Wrapper>
      <LoginWrapper>
        <InputButtonWrapper>
          <ItemInput placeholder="Username" />
          <ItemInput type="password" placeholder="Password" />
        </InputButtonWrapper>

        <ButtonWrapper>
          <Btn onClick={LoginClick}>Login</Btn>
          <Btn>Sign in with Google</Btn>
          <Btn onClick={RegisterAccountClick}>Register new account</Btn>
        </ButtonWrapper>
      </LoginWrapper>
    </Wrapper>
  );
};
