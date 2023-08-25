import React from "react";
import { Wrapper, LoginWrapper, LoginBtn } from "./index.style";
import { ItemInput } from "../../components/Item-input";
import { ButtonWrapper } from "./index.style";
import { Btn } from "../../components/menu-buttons/index.style";
import { useNavigate } from "react-router-dom";


export const LoginPage = () => {
    const navigate = useNavigate ();

    const LoginClick = () => {
        navigate('/main')
    }

    const RegisterAccountClick = () => {
        navigate('/CreateAccount')
    }
return (

 <Wrapper>
    
        
            <LoginWrapper>
                <ItemInput placeholder="Username"/>
                <ItemInput type="password" placeholder="Password"/>
            <ButtonWrapper>
                <Btn onClick={LoginClick}>Login</Btn>
                <Btn>Sign in with Google</Btn>
                <Btn onClick={RegisterAccountClick}>Register new account</Btn>
                
            </ButtonWrapper>
            </LoginWrapper>
        
   
</Wrapper> 


)



}