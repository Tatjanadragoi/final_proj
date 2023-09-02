import React from "react";
import { LoginHereButton, RegisteredMembrer, Wrapper} from "./index.style";
import { LoginWrapper, ButtonWrapper } from "../Login-page/index.style";
import { ItemInput } from "../../components/Cost-form/index.style";
import { AddButton } from "../../components/Add-item-button/index.style";
import { useNavigate } from "react-router-dom";
import { InputWrapper } from "./index.style";

export const CreateAccount = () => {
    const navigate = useNavigate()
    const OnLoginHereClick = () => {
        navigate('/')
    }

return (

    <Wrapper>
    
        
            <LoginWrapper>
                <InputWrapper>
                <ItemInput placeholder="Username"/>
                    <ItemInput type="password" placeholder="Password"/>
                    <ItemInput type="password" placeholder="Confirm password"/>
                </InputWrapper>
                    
               
                
            <ButtonWrapper>
            <AddButton>Sign In</AddButton>
                 
            </ButtonWrapper>
            <RegisteredMembrer>Already a member? <LoginHereButton onClick={OnLoginHereClick}>Login here</LoginHereButton></RegisteredMembrer>
          
            </LoginWrapper>
        
   
</Wrapper> 
)


}