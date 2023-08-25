import React from "react";
import { AddedCategories, ExistingCategories, InputWrapper, Wrapper } from "./index.style";
import { LeftSide, RightSide } from "../main-page/index.style";
import { LeftMenu } from "../../components/Left-menu";
import { ItemInput } from "../../components/Item-input";
import { Btn } from "../../components/menu-buttons/index.style";
import { Titel } from "../../components/App-name/index.style";




export const CategoryPage = () => {

return (

    <Wrapper>
        
        

        <InputWrapper>
            <ItemInput placeholder="Add  new category"/>
            <Btn>add</Btn>
        </InputWrapper>
        
        
       <ExistingCategories>Existing Categories</ExistingCategories>
        <AddedCategories></AddedCategories>  
        
    </Wrapper>
    
    
    
    



)


}